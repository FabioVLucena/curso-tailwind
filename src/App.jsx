
function App() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-5">
      
      <div className="">
        <h6 className="font-bold mb-2 dark:text-white">Componente Dropdown</h6>

        <div className="flex flex-col">
          <button className="flex items-center w-[80px] text-sm bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white shadow">
            Botão
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className="inline bg-white border border-gray-300 py-1 rounded-md shadow-md w-[160px] h-[33px]">
            <a href="" className="w-full">
              Link 1
            </a>
          </div>
        </div>
      </div>

      <hr />

      <div className="space-y-3">
        <h6 className="font-bold mb-2 dark:text-white">Componente Input</h6>

        <input 
          type="text" 
          placeholder="Digite seu nome"
          className="bg-gray-50 border w-full border-gray-300 focus:border-blue-500 rounded px-2 py-1 text-sm text-gray-800 focus:outline-none"  
        />

        <input 
          type="text" 
          placeholder="Digite seu nome"
          className="bg-gray-50 border w-full border-gray-300 focus:border-blue-500 rounded px-4 py-2 text-base text-gray-800 focus:outline-none"  
        />

        <input 
          type="text" 
          placeholder="Digite seu nome"
          className="bg-gray-50 border w-full border-gray-300 focus:border-blue-500 rounded px-5 py-3 text-lg text-gray-800 focus:outline-none"  
        />
      </div>

      <hr />

      <div className="space-y-3">
        <h6 className="font-bold mb-2 dark:text-white">Componente Badge/Tag</h6>
        
        <div className="space-x-2">
          <div className="inline-flex item-center text-sm bg-green-100 px-1.5 py-0.5 rounded-md text-green-800 font-medium">
            Ativo
          </div>
          
          <div className="inline-flex item-center text-sm bg-green-100 px-1.5 py-0.5 rounded-md text-green-800 font-medium">
            Ativo
          </div>
        </div>

        <div className="space-x-2">
          <div className="inline-flex item-center text-sm bg-red-100 px-1.5 py-0.5 rounded-md text-red-800 font-medium">
            Inativo
          </div>
          
          <div className="inline-flex item-center text-sm bg-red-100 px-1.5 py-0.5 rounded-md text-red-800 font-medium">
            Inativo
          </div>
        </div>

        <div className="space-x-2">
          <div className="inline-flex item-center text-sm bg-yellow-100 px-1.5 py-0.5 rounded-md text-yellow-800 font-medium">
            Em progresso
          </div>
          
          <div className="inline-flex item-center text-sm bg-yellow-100 px-1.5 py-0.5 rounded-md text-yellow-800 font-medium">
            Em progresso
          </div>
        </div>

      </div>

      <hr />

      <div className="space-x-4">
        <h6 className="font-bold mb-2 dark:text-white">Componente Button</h6>
        
        <button className="text-sm bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded text-white shadow">
          Save
        </button>
      
        <button className="text-sm bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white shadow">
          Save
        </button>
      
        <button className="text-base bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded text-white shadow">
          Save
        </button>
      </div>

      <hr />

      <div>
        <h6 className="font-bold mb-2 dark:text-white">Componente Card</h6>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="w-full bg-gray-100 p-4 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-500">
            <h4 className="font-bold dark:text-white">Topo</h4>
          </div>

          <div className="p-4 dark:bg-gray-600 dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
              
          <div className="w-full bg-gray-50 p-4 border-t border-gray-100 dark:bg-gray-900 dark:border-gray-500 dark:text-white">
                  Rodapé
          </div>
        </div>
      </div>
    </div>
  )
}

export default App