import '../styles/jukebox.css';
import album1 from '../images/Y.png'
import album2 from '../images/snow_flower.png'
import album3 from '../images/might_love.png';

const Jukebox = () => {
    return (
        <div className="Jukebox__wrapper">
            <div className="Jukebox__wrapper__header">
                <div className="Jukebox__header__title">
                    <div className="Jukebox__title">추억의 BGM</div>
                    <div className="Jukebox__subtitle">TODAY CHOICE</div>
                </div>
                <div className="divideLine"></div>
                <div className="albumWrapper">
                    <div className="albumWrapper__item">
                        <img className="album-img" src={album1} alt="Y" />
                        <div className="album-songtitle">Y(Please Tell Me Why)</div>
                        <div className="album-artist">프리스타일</div>
                        </div>
                    <div className="albumWrapper__item">
                        <img className="album-img" src={album2} alt="snow_flower" />
                        <div className="album-songtitle">눈의 꽃</div>
                        <div className="album-artist">박효신</div>
                    </div>
                    <div className="albumWrapper__item">
                        <img className="album-img" src={album3} alt="might_love" />
                        <div className="album-songtitle">사랑했나봐</div>
                        <div className="album-artist">윤도현</div>
                    </div>
                </div>
            </div>

            <div className="Jukebox__wrapper__body">
                <div className="Jukebox__header__title">
                    <div className="Jukebox__title">추억의 BGM</div>
                    <div className="Jukebox__subtitle">TODAY CHOICE</div>
                </div>
                <table className="albumTable">
                    <thead>
                        <tr>
                            <th className="albumTable__checkbox"><input type="checkbox" /></th>
                            <th className="albumTable__number">번호</th>
                            <th className="albumTable__song">곡명</th>
                            <th className="albumTable__artist">아티스트</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ['1', '눈의 꽃', '박효신'],
                            ['2', '사랑스러워', '김종국'],
                            ['3', '내사람: Partner For Life', 'SG워너비'],
                            ['4', 'Love Love Love', '에픽하이'],
                            ['5', '애인...있어요', '이은미']
                        ].map(([num, song, artist]) => (
                            <tr key={num}>
                                <td className="album-table-checkbox"><input type="checkbox" /></td>
                                <td className="album-table-number">{num}</td>
                                <td className="album-table-song">{song}</td>
                                <td className="album-table-artist">{artist}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Jukebox;
