export default function Card() {
  return (
    <div className="max-w-sm h-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  korean-font grid grid-row-3">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Mega Earn
      </h5>

      <p className="mb-1 text-md  text-gray-700 dark:text-gray-400">
        React를 활용한 블록체인 웹 서비스 개발
      </p>
      <button className="text-xs text-white bg-blue-700 rounded-lg hover:bg-blue-800">
        Read more
      </button>
    </div>
  )
}
