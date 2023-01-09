import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../../../../components/input";
import { DashContext } from "../../../../../context/DashContext";
import { StyledButton } from "../../../../../styles/buttons";
import { newPostSchema } from "./newPostSchema";
import { StyledDashNewPostForm } from "./style";


const DashNewPostForm = () => {
    const [loadingPost, setLoadingPost] = useState(false);
    const { createPost } = useContext(DashContext);

    const {
        register,
        handleSubmit,
        formState: { errors }, reset } = useForm({
            mode: "onBlur",
            resolver: yupResolver(newPostSchema),
        });

    async function submit(data) {
        const idLocal = localStorage.getItem("@USER:ID");
        const dataWithId = { ...data, userId: +idLocal };

        await createPost(dataWithId, setLoadingPost);
        reset({
            title: "",
            image: "",
            description: ""
        });
    }


    return (
        <StyledDashNewPostForm>
            <form noValidate onSubmit={handleSubmit(submit)}>

                <div>
                    <Input
                        placeholder="Título"
                        id="title"
                        type="text"
                        error={errors.title}
                        {...register("title")}
                    />
                    <Input
                        placeholder="Link da imagem"
                        id="image"
                        type="text"
                        error={errors.image}
                        {...register("image")}
                    />
                </div>
                <Input
                    placeholder="Conteúdo do post"
                    id="description"
                    type="text"
                    error={errors.description}
                    {...register("description")} />

                <StyledButton
                    type="submit"
                    buttonSize="medium"
                    buttonStyle="dashSubmit">
                    POSTAR
                </StyledButton>
            </form>
        </StyledDashNewPostForm>
    );
};

export default DashNewPostForm;