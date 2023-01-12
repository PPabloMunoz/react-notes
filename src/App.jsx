import { useState } from 'react'
import { useUserContext } from '../context/StateContext'
import AddNoteCard from '../components/AddNoteCard'
import { AiFillDelete } from 'react-icons/ai'

function App() {
  const { notes, showAddNote, setShowAddNote, deleteNote } = useUserContext()

  return (
    <div className='App min-h-screen p-5 lg:px-40 flex flex-col justify-start items-center gap-4'>
      <h1 className='text-center font-bold text-4xl text-white'>Notes</h1>
      {notes.map((note, i) => {
        const { title, body } = note
        return (
          <div className='w-full bg-red-400 p-5 rounded-lg relative' key={i}>
            <h2 className='text-start text-black font-semibold text-lg uppercase'>
              {title}
            </h2>
            <p className='card_body'>{body}</p>
            <span
              className='absolute right-4 bottom-3'
              onClick={() => deleteNote(note)}>
              <AiFillDelete size={20} />
            </span>
          </div>
        )
      })}

      <button
        className='w-1/2 p-2 rounded-md bg-blue-400'
        onClick={() => {
          setShowAddNote(true)
        }}>
        Add note
      </button>

      {showAddNote && <AddNoteCard />}
    </div>
  )
}

export default App
