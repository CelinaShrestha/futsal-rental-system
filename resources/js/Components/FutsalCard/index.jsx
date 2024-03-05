import futsal from "../../../assets/images/futsal.jpg";

export default function FutsalCard() {
    return (
        <div className="futsal-card">
            <div className="img">
                <img src={futsal} alt="" />
            </div>

            <div>
                <h1 className="text-lg font-semibold">Star Futsal</h1>
            </div>
        </div>
    );
}
