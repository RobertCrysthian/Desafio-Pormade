import "../../index.css"
import imagem from "../../imagens/imagem.png"
import { useState, useContext } from 'react'
import { MenuContext } from "../../Contexts/MenuContext"

const ModalDelete = () => {

    const [word, setWord] = useState('usuário')
    const {deletar, setDeletar} = useContext(MenuContext)

    const close = () => {
        setDeletar(false)
    }

    return (
        <div className={`fixed left-0 top-0 bottom-0 right-0 bg-white bg-opacity-20 duration-200 justify-center items-center overflow-y-auto ${deletar ? 'flex' : "hidden"}`}>
            <div className=" w-3/6 h-1/3 rounded-xl border-2 border-solid border-green_pormade bg-black_modal">
                <div className='w-full h-1/3 items-center flex justify-center text-white'>
                    <img src={imagem}></img>
                </div>
                <div className='w-full h-1/3 items-center flex justify-center text-white text-center text-2xl font-bold '>
                Tem certeza que deseja deletar este {word}?
                </div>
                <div className='w-full h-1/3 itens-center flex justify-center text-white text-center text-2xl font-bold '>
                    <button className='flex w-72 bg-red-700 h-2/3 rounded-xl text-center justify-center items-center mx-3 hover:bg-red_button' onClick={close}>Cancelar</button>
                    <button className='flex w-72 bg-light_green h-2/3 rounded-xl text-center justify-center items-center mx-3 hover:bg-green_button' onClick={close}> Confirmar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete