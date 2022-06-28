const TextNew = (props) => {
    return ( 
        <div dangerouslySetInnerHTML={{ __html: props.content}}>
        </div>
     );
}
 
export default TextNew;