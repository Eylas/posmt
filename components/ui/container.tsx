interface ContainerProps {
    children: React.ReactNode
}

// wrap everything in a layout in this specific container for consistency
// use a secondary div for specific positioning

const Container: React.FC<ContainerProps> = (
    {
        children
    }
) => {
    return (
        <div className="mx-auto w-full max-w-7xl">
            {children}
        </div>
    );
};

export default Container