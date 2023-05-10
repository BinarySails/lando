import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SearchInput({
    placeholder = "Buscar",
    icon = faSearch,
    onClick
} : {
    placeholder?: string,
    icon?: IconDefinition
    onClick?: () => void,
}) {

    const onClickHandler = () => {
        if (onClick)
            onClick();
    };

    return (
        <div
            className="flex text-black gap-2 bg-white border-2 border-skobeloff rounded-lg p-5"
            onClick={onClickHandler}
        >
            <FontAwesomeIcon icon={icon} className="pt-1" />
            <input className="w-full outline-transparent focus:outline-none" type="text" placeholder={placeholder} />
        </div>
    );

}
