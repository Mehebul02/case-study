
const Card = ({icon:Icon,total,label,bgColor}) => {
    return (
        <div className={`flex items-center gap-6  p-6 px-10 rounded-lg ${bgColor}`}>
          <Icon className="text-3xl text-white" />
          <div>
            <h1 className="text-4xl font-bold  text-white">+{total}</h1>
            <h1 className="text-3xl text-white font-bold">{label}</h1>
          </div>
        </div>

    );
};

export default Card;