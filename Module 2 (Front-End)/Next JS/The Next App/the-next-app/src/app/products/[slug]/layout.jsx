export default function LayoutProduct({children}){
    return(
        <>
            <h6 className="flex bg-blue-500">
               Sidebar, this is a layout/component that appears in all /products pages and only in /products pages 
            </h6>
            {children}
        </>
    )
}