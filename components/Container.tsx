type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return <div className={`page-shell ${className}`.trim()}>{children}</div>;
}
