import Typography from "../typography";

interface PostsProps {
  title: string;
  message: string;
  author: string;
  date: string;
  time: string;
}


function Posts({ title, message, author, date, time }: PostsProps) {
  return (
    <div style={{
      maxWidth: '1000px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#808080', 
      marginBottom: '80px',
      // backgroundColor: 'red'
    }}>
      <Typography title={title} />
      <section style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        gap: '50px',
        color: '#808080',
        borderBottom: '1px solid #808080',
      }}>
        <span style={{ marginBottom: "20px"}}>{author}</span>
        <span style={{ marginBottom: "20px"}}>{date}</span>
        <span style={{ marginBottom: "20px"}}>{time}</span>
      </section>
      <p style={{ color: "#494D4B", textAlign: "justify"}}>{message}</p>
    </div>
  );
}

export default Posts;