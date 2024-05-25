const Content = ({ data }) => {
  return (
    <main className="content">
      <table>
        <tbody>
          {data.length > 0 &&
            data.map((item) => (
              <tr key={item.id}>
                <td>{JSON.stringify(item)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default Content;
