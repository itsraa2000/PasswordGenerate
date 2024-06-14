@react.component
let make = (
  ~label,
  ~onClick,
) => {
  <div className="flex justify-end items-center gap-6 mt-8">
  <button
    onClick={onClick}
    className="bg-maingreen text-mainlight text-sm rounded-lg px-6 py-2.5 hover:bg-subgreen hover:shadow-sm"
  >{React.string(label)}</button>
  </div>
}