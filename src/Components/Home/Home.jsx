import FlipCard from "../FlipCard/Flipcard";


const Home = () => {
    
    return (
        <div>
            <h1 className="text-2xl font-bold">This is Home</h1>
            <p> Click On The Image to Flip </p>
            <div className="mt-60">
                <FlipCard></FlipCard>
            </div>
        </div>
    );
};

export default Home;