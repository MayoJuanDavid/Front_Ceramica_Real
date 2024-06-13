interface LayoutProps{
    children: React.ReactNode
}
export default function Layout(
    {
        children
    }
    :LayoutProps
)

{
    return (
        <main className="flex min-h-screen">      <div className="w-1/4 bg-custom-bgColor p-4 flex flex-col justify-between bg-[#f2eae1]">
        <div>
          <div className="flex items-center mb-8">
            <img
              src="https://placehold.co/50x50"
              alt="Admin"
              className="rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">Admin</h2>
            </div>
          </div>
          <ul>
            <li className="mb-4">
              <a
                href="#"
                className="flex items-center p-2 bg-yellow-500 text-white rounded-lg"
              >
                <img
                  src="https://placehold.co/20x20"
                  alt="Home"
                  className="mr-2"
                />
                Vajillas
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center p-2 text-zinc-700">
                <img
                  src="https://placehold.co/20x20"
                  alt="Collection"
                  className="mr-2"
                />
                Coleccion
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="flex items-center p-2 text-zinc-700">
                <img
                  src="https://placehold.co/20x20"
                  alt="Pieces"
                  className="mr-2"
                />
                Piezas
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#" className="flex items-center p-2 text-zinc-700">
            <img
              src="https://placehold.co/20x20"
              alt="Logout"
              className="mr-2"
            />
            Logout
          </a>
        </div>
      </div>{children}</main>
    )
}