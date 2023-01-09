import { useContext, useEffect } from "react";
import { StyledPosts } from "./style";
import { DashContext } from "../../context/DashContext";
import { Button } from "../Button";

import PostCard from "./postCard";

const PostsList = ({ titleList, actualId, name, style, size, click }) =>{
    const { postList, loadPosts } = useContext(DashContext);
        
    useEffect(()=> {        
        loadPosts(actualId);  
    }, [actualId]);

    if(!postList) return null;

    return( 
        <StyledPosts>
            <h3>{titleList.toUpperCase()}</h3> 
            <ul>
                {postList.map(({title, description, id, image })=>{
                    return <PostCard 
                        title={title} 
                        description={description} 
                        image={image} 
                        key={id} 
                        >   
                        <Button
                            name={name}
                            style={style}
                            size={size}
                            click={click}
                            idPost={id} 
                        />
                    </PostCard>
                })}
            </ul>
        </StyledPosts>
    )
}

export default PostsList