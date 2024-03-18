

export default function Button({ children, disabled, ...other}) {
    return (
        <button disabled={disabled}  {...other} className="main-button">{children}</button>
    )
}