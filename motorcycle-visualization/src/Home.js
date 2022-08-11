import './App.css';
import './index.css';

const Home = (myData) => {
    function populateSelect() {
        const allMakes = myData.myData.map((motorcycle) => motorcycle.Make);
        const freqMap = allMakes.reduce(
            (map, make) => map.set(make, (map.get(make) || 0) + 1),
            new Map
        );
        const options = Array.from(freqMap.keys());
        const values = Array.from(freqMap.values());
        for (let i = 0; i < values.length; i++) {
            return (
                <option value="">{values[i]}</option>
            )
        }

    }

    return (
        <div className="home">
            <h1>Hello! Welcome to my motorcycle visualization page</h1>
            <br />
            <h4>Click on a link below to visit</h4>
            <br />
            <a href="/BarChart">Click here to see a breakdown of makes within the dataset</a>
            <br />
            <br />
            <form action="/ScatterPlot">
                <label for="mk">Select a make to further analyze   </label>
                <select name="make" id="mk">
                    <option value="harleydavidson">Harley-Davidson</option>
                    <option value="bmw">BMW</option>
                    <option value="kawasaki">Kawasaki</option>
                    <option value="honda">Honda</option>
                    <option value="other">Other</option>
                    <option value="yamaha">Yamaha</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="triumph">Triumph</option>
                    <option value="indian">Indian</option>
                    <option value="custombuiltmotorcycles">Custom</option>
                    <option value="victory">Victory</option>
                    <option value="canam">Can-am</option>
                </select>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Home;