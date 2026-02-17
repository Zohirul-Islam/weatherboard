import heart from '../../assets/heart.svg'

const Favourite = ({onShowModal}) => {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={heart} alt="heart" />
      <button onClick={onShowModal}>Favourite Locations</button>
    </div>
  );
};

export default Favourite;
