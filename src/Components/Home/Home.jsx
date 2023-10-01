import FlipCard from "../FlipCard/Flipcard";


const Home = () => {
    
    return (
        <div>
            <h1 className="text-2xl font-bold">This is Home</h1>
            <p>Click on the image to Flip</p>
            <div className="mt-40">
                <FlipCard></FlipCard>
            </div>
        </div>
    );
};

export default Home;