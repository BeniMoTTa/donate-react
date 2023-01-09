import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const DashContext = createContext({});
export const DashProvider = ({ children }) => {
    const [modal, setModal] = useState(false);
    const [modalPost, setModalPost] = useState(false);
    const [idPost, setId] = useState(0);
    const [idProfilePost, setIdProfilePost] = useState(0)
    const [postList, setPosts] = useState([]);
    const [loadingUser, setLoadingUser] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    
    const idLocal = localStorage.getItem("@USER:ID");
    const token = window.localStorage.getItem("@USER:TOKEN");
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    async function deletePost() {
        try {
            const data = await api.delete(`/posts/${idPost}`);
        } catch (err) {
            console.error(err)
        }
    }

    function openModal(e) {
        setModal(true);
        setId(+e.target.id);
    }

    function openProfilePost(e) {
        setModalPost(!modalPost);
        setIdProfilePost(+e.target.id);
    }

    const createPost = async (data, setLoadingPost) => {
        const token = localStorage.getItem("@USER:TOKEN");
        try {
            setLoadingPost(true);
            const response = await api.post("/posts", data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            if (response.statusText === "Created") {
                loadPosts(idLocal)
                toast.success("Publicação feita com sucesso!");
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingPost(false);
        }
    }

    const updateUser = async (data, setLoadingUpdateUser) => {
        const token = localStorage.getItem("@USER:TOKEN");
        const id = localStorage.getItem("@USER:ID");
        try {
            setLoadingUpdateUser(true);
            const response = await api.patch(`/users/${id}`, data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            if (response.statusText === "OK") {
                toast.success("Informações atualizadas com sucesso!");
                setCurrentUser(response.data);
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingUpdateUser(false);
        }
    }

    useEffect(() => {
        getCurrentUser();
    }, []);

    const getCurrentUser = async () => {
        try {
            setLoadingUser(true)
            const res = await api.get(`users/${idLocal}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const json = await res.data;
            setCurrentUser(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingUser(false)
        }
    };

    async function loadPosts(id) {
        const {data} = await api.get(`/users/${id}?_embed=posts`);
        setPosts(data.posts);
    }


    return <DashContext.Provider
        value={{
            modal,
            setModal,
            modalPost,
            setModalPost,
            idProfilePost,
            deletePost,
            setId,
            postList,
            setPosts,
            openModal,
            openProfilePost,
            createPost,
            updateUser,
            currentUser,
            getCurrentUser,
            loadPosts
        }}
    >
        {children}
    </DashContext.Provider>;
};
