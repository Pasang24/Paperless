type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={`p-2 sm:p-4 max-w-[1000px] mx-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
