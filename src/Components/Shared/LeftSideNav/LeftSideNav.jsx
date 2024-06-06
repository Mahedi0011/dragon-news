import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic1 from '../../../../public/assets/1.png'
import pic2 from '../../../../public/assets/2.png'
import pic3 from '../../../../public/assets/3.png'


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            {
                categories.map(category =>
                    <Link to={`/category/${category.id}`} className="block ml-4 text- font-bold p-2"
                        key={category.id}><h2 className="bg-gray-200 p-2 border-rounded-4xl">{category.name}</h2></Link>)
            }
            <div className="space-y-4">
                <img src={pic1} alt="" />
                <img src={pic2} alt="" />
                <img src={pic3} alt="" />
            </div>
        </div>
    );
};

export default LeftSideNav;