import React, { useRef } from 'react';

function AddMovie(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();
    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form className='p-3 bg-slate-600 m-2' onSubmit={submitHandler}>
      <div className='p-3 m-3 '>
        <label htmlFor='title'> Title </label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className='p-3 m-3'>
        <label htmlFor='opening-text'> Opening Text </label>
        <input type='text' id='opening-text' ref={openingTextRef}></input>
      </div>
      <div className='p-3 m-3'>
        <label htmlFor='date'> Release Date </label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;