export default function PostureMainContent({ children }) {
  return children ? (
    <div className="border-t-8 my-6 py-6 border-gray-100">{children}</div>
  ) : null
}
