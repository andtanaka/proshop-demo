function PageContent({ title, children }) {
  return (
    <div
      className=""
      style={{
        backgroundColor: '#f0f0f0',
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <div className="container">
        <h2 style={{ fontSize: '4rem' }}>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default PageContent;
