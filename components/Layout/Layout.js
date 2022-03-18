const Layout = ({ children }) => {
  const [col1, col2, col3] = children
  return (
    <>
      <div className='container'>
        <div className="row">
          {col1}
        </div>
        <div className="row">
          <div className="col" style={{ maxWidth: '285px' }}>
            {col2}
          </div>
          <div className="col" style={{ paddingBottom: '60px' }}>
            {col3}
          </div>
        </div>
      </div>
    </>
  )
}
export default Layout