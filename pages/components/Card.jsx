const Button = ({ type, children }) => (
   <button
      className={
         "bg-gray-800 text-xs text-gray-200 px-10 py-2 rounded " +
         (type === "primary"
            ? "bg-gray-800 text-gray-200"
            : "bg-gray-200 text-gray-800")
      }
   >
      {children}
   </button>
)

export default ({ category, title, content }) => (
   <div className="w-80 border-2 rounded p-4 shadow-lg">
      <h6 className="text-xs text-gray-500">{category}</h6>
      <h1 className="text-xl font-bold mb-2">{title}</h1>
      <p className="text-base text-gray-800 mb-4">{content}</p>
      <div className="flex flex-row justify-between">
         <Button type="secondary">ACTION 1</Button>
         <Button type="primary">ACTION 2</Button>
      </div>
   </div>
)
