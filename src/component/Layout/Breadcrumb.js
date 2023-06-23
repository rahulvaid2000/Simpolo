const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((path) => path);
  
    return (
      
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="ok" to="/">Home</Link>
          </li>
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
  
            return (
              <li key={path} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                {isLast ? (
                  <span>{path}</span>
                ) : (
                  <Link to={routeTo}>{path}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }

  export default Breadcrumb;
