export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `flex w-full justify-center rounded-md bg-main px-3 py-1.5 text-sm font-semibold leading-6 ease-in-out duration-200 text-white shadow-sm hover:bg-main/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
