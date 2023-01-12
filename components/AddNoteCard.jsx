import { useUserContext } from '../context/StateContext'
import { RxCross1 } from 'react-icons/rx'

export default function AddNoteCard() {
  const { notes, setNotes, setShowAddNote } = useUserContext()
  let titleValue = 'Note title',
    bodyValue = 'Note Body',
    cardColor = '#fff'
  return (
    <div className='bg-white p-3 rounded-lg relative'>
      <h3 className='text-lg text-center font-medium mb-3'>Add new note</h3>
      <div className='flex flex-col justify-evenly items-center w-full gap-5'>
        <div>
          <label htmlFor='form-label inline-block mb-3 text-gray-700'>
            Note Title
          </label>
          <input
            className='w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
          transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            placeholder='Note title'
            onChange={() => (titleValue = event.target.value)}
          />
        </div>
        <div>
          <label htmlFor='form-label inline-block mb-2 text-gray-700 mb-1'>
            Note Body
          </label>
          <input
            className='w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded
          transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            type='text'
            placeholder='Note Body'
            onChange={() => (bodyValue = event.target.value)}
          />
        </div>

        <button
          className='bg-black text-white p-2 rounded-lg w-1/2'
          onClick={() => {
            setNotes([
              ...notes,
              {
                title: titleValue.toLowerCase(),
                body: bodyValue,
              },
            ])
            setShowAddNote(false)
          }}>
          Create Note
        </button>
      </div>
      <div
        className='absolute top-3 right-4 z-20 cursor-pointer'
        onClick={() => setShowAddNote(false)}>
        <RxCross1 />
      </div>
    </div>
  )
}
