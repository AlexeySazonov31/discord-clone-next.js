const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return ( <div className="p-5 h-full bg-destructive">
        {children}
    </div> );
}
 
export default AuthLayout;