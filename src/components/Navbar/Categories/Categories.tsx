import { TbBeach } from "react-icons/tb";
import Container from "../../Container"
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'Pictures of the beach with the best views'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'Pictures of the windmills with the best views',
    },
    {
        label:'Modern',
        icon: MdOutlineVilla,
        description: 'Pictures of the modern houses with the best views',
    }
]

const Categories = () => {
    return ( 
        <Container>
            <div className="pt-4 flex flex-row items-center justify-between overflow-auto ">
                {categories.map((item) => 
                    <CategoryBox
                    key={item.label}
                    label={item.label}
                    description={item.description}
                    icon={item.icon}
                />
                )}
            </div>
        </Container>
     );
}
 
export default Categories;