export default function Section({children}){
    return (
        <section className="flex items-center h-full w-full justify-center gap-4 max-sm:flex-col max-lg:flex-col">
            {children}
        </section>
    )
}