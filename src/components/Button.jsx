function Button({ text, onClick }) {
  const buttonClass =
    text === '-1'
      ? 'bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-400 rounded w-16'
      : 'bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-400 rounded w-16'

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  )
}
export default Button
