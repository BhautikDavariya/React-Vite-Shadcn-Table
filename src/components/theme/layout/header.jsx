
  
  export function DashboardHeader({
    heading,
    text,
    className,
    children,
  }) {
    return (
      <div className={`flex items-center justify-between px-2 border-b-2 ${className}`}>
        <div className="grid gap-1">
          <h1 className="font-heading text-3xl md:text-3xl">{heading}</h1>
          {text && <p className="text-lg text-muted-foreground">{text}</p>}
        </div>
        {children}
      </div>
    );
  }
  