import { useState, createContext, useContext } from 'react'

const Context = createContext()

export default function UserContext({ children }) {
  const [notes, setNotes] = useState([])
  const [showAddNote, setShowAddNote] = useState(false)

  const deleteNote = (noteToDelete) => {
    const newNotes = notes.filter((note) => note !== noteToDelete)

    setNotes(newNotes)
  }

  return (
    <Context.Provider
      value={{ notes, setNotes, showAddNote, setShowAddNote, deleteNote }}>
      {children}
    </Context.Provider>
  )
}

export const useUserContext = () => useContext(Context)
