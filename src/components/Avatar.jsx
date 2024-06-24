
import React, { useEffect, useState } from 'react';

function Avatar() {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    // Generate a random string to get a unique avatar each time
    const randomString = Math.random().toString(36).substring(7);
    const url =`https://robohash.org/${randomString}.png`;
    setAvatarUrl(url);
  }, []);

  return (
    <div className=" w-[40%] h-full">
      {avatarUrl && <img src={avatarUrl} alt="Random Avatar" className="rounded-full shadow-lg md:w-full md:h-full h-1/3 w-1/3 border border-purple-700 object-cover" />}
    </div>
  );
}

export default Avatar;
