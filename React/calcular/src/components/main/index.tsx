import Posts from "../common/posts";

import childImage from '../../../src/assets/child-background.png';
import Aside from "../common/aside";

function Main() {
  return (
    <div style={{ height: "85vh", width: "100%", color: '#808080' }}>
      <img src={childImage} alt="Child-image" width={"100%"} />
      <div style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}>
        <article style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <Posts
            title="How to game dev!" 
            message="Godot is a game engine pretty easy to use, is 100% free and open source, you can make games for any platform, 2D or 3D, and the best part is that you can use any programming language you want, like C#, C++, Python, and more."
            author="Author"
            date="07/06/2022"
            time="12:00"
          />
          <Posts
            title="How to game dev!" 
            message="Godot is a game engine pretty easy to use, is 100% free and open source, you can make games for any platform, 2D or 3D, and the best part is that you can use any programming language you want, like C#, C++, Python, and more."
            author="Author"
            date="07/06/2022"
            time="12:00"
          />
          <Posts
            title="How to game dev!" 
            message="Godot is a game engine pretty easy to use, is 100% free and open source, you can make games for any platform, 2D or 3D, and the best part is that you can use any programming language you want, like C#, C++, Python, and more."
            author="Author"
            date="07/06/2022"
            time="12:00"
          />
        </article>
        <aside style={{ height: '100%'}}>
          < Aside text="" />
        </aside>

      </div>
    </div>
  );
}

export default Main;