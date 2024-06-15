@react.component
let make = () => {

  <div className="screen-container">
    <div className="h-full w-full">
      <div className="mx-auto flex h-screen w-[1220px] max-w-full flex-col px-md py-[15svh]">
        <div className="mx-auto flex w-full max-w-[420px] flex-col">
          <div className="flex justify-center p-6">
            <h1 className="text-mainlight text-3xl font-thin"> 
            {"Passsword Generator"->React.string}
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="bg-subdark flex items-center justify-between">
              <div className="relative p-3">
                <h2 className="text-2xl text-grey">
                {"P4$5W0rD!@"->React.string}
                </h2>
              </div>
              <div className="relative flex items-center justify-end p-3">
                <button className=" text-maindark flex items-center justify-center bg-maingreen hover:bg-subgreen font-medium text-sm px-4 py-2">
                  <svg className="w-6 h-6 text-gray-800 text-maindark"  xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor"  d="M9 8v3a1 1 0 0 1-1 1H5m11 4h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1v1m4 3v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-7.13a1 1 0 0 1 .24-.65L7.7 8.35A1 1 0 0 1 8.46 8H13a1 1 0 0 1 1 1Z"/>
                  </svg>
                  {"COPY"->React.string}
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[420px] flex-col bg-subdark m-4">
            <div className="flex flex-col justify-between m-4">
              <div className="flex flex-col pb-8">
                <div className="flex justify-between items-center pb-3">
                  <h3 className="text-mainlight text-xl font-thin">{"Character Length"->React.string}</h3>
                  <h2 className="flex items-center text-maingreen text-2xl">{"0"->React.string}</h2>
                </div>
                <div className="flex">
                  <input id="default-range" type_="range" value="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                </div>
              </div>
                <div className="flex flex-col space-y-4 pb-6">
                  <div className="flex flex-row space-x-4 items-center">
                    <button className="h-6 w-6 bg-subdark border-sublight border-solid border-box border-[3px]" />
                    <p className="text-mainlight text-xl font-thin">{"Include Uppercase Letters"->React.string}</p>
                  </div>
                  <div className="flex flex-row space-x-4 items-center">
                    <button className="h-6 w-6 bg-subdark border-sublight border-solid border-box border-[3px]" />
                    <p className="text-mainlight text-xl font-thin">{"Include Lowercase Letters"->React.string}</p>
                  </div>
                  <div className="flex flex-row space-x-4 items-center">
                    <button className="h-6 w-6 bg-subdark border-sublight border-solid border-box border-[3px]" />
                    <p className="text-mainlight text-xl font-thin">{"Include Numbers"->React.string}</p>
                  </div>
                  <div className="flex flex-row space-x-4 items-center">
                    <button className="h-6 w-6 bg-subdark border-sublight border-solid border-box border-[3px]" />
                    <p className="text-mainlight text-xl font-thin">{"Include Symbols"->React.string}</p>
                  </div>
                </div>
                <div className="bg-maindark mb-6">
                  <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                      <h2 className="p-3 text-xl text-grey">
                        {"STRENGTH"->React.string}
                      </h2>
                      <div className="flex space-x-2 p-3">
                        <div className="h-8 w-2 bg-maindark border-sublight border-solid border-box border-2"></div>
                        <div className="h-8 w-2 bg-maindark border-sublight border-solid border-box border-2"></div>
                        <div className="h-8 w-2 bg-maindark border-sublight border-solid border-box border-2"></div>
                        <div className="h-8 w-2 bg-maindark border-sublight border-solid border-box border-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="text-maindark w-full justify-center flex items-center bg-maingreen hover:bg-subgreen py-3 text-xl font-thin">
                  {"GENERATE"->React.string}
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
