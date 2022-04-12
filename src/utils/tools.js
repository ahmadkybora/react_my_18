import React from 'react';

export const ImgStyle = {}

export const Form = () => {}

export const Input = ({ type, name, className, id=null, value=null, onChange=null, placeholder=null, style=null }) => {
    return (
        <input 
            type={type}
            name={name}
            defaultValue={value} 
            className={className}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            style={style}
        />
    )
}

export const Button = ({ type, name, value, className=null, id=null, style=null }) => {
    return (
        <button
            type={type}
            name={name}
            className={className}
            id={id}
            style={style}
        >
            {value}
        </button>
    )
}

export const Select = ({ name, key, value, className, id, style=null }) => {
    return (
        <select 
            name={name} 
            className={className} 
            id={id}
            style={style}
        >
            <option key={key}>{value}</option>
        </select>
    )
}

export const TextArea = ({ name, value, className=null, id=null, style=null }) => {
    return (
        <textArea 
            name={name} 
            className={className} 
            id={id} 
            style={style}
        >
            {value}
        </textArea>
    )
}

export const Label = ({ htmlFor, value, style=null }) => {
    return (
        <label 
            htmlFor={htmlFor} 
            style={style}
        >
            {value}
        </label>
    )
}

export const Table = () => {}

export const THead = () => {}

export const TBody = () => {}

export const Th = ({ className, value, style=null }) => {
    return (
        <th 
            className={className} 
            style={style}
        >
            {value}
        </th>
    )
}

export const Td = ({ className, value, style=null }) => {
    return (
        <td 
        className={className} 
        style={style}
        >
            {value}
        </td>
    )
}

export const Tr = ({ className, value, style=null }) => {
    return (
        <tr 
            className={className} 
            style={style}
        >
            {value}
        </tr>
    )
}

export const Img = ({ width, height, className, value, style=null }) => {
    return (
        <img 
            width={width} 
            height={height} 
            className={className} 
            src={value} 
            style={style} 
        />
    )
}

export const Card = ({ styleCard, img, width, height, title, text, linkReadMore, linkBuy, style=[] }) => {
    return (
        <div className="card mb-3" style={styleCard}>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img src={img} width={width} height={height} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className='col-md-8'>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{text}</p>

                        <a href={linkReadMore}>
                            <I className="fa fa-leaf btn btn-primary" />
                        </a>

                        <a href={linkBuy}>
                            <I className="fa fa-shopping-cart btn btn-success" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const I = ({ className, style=null }) => {
    return (
        <i 
            className={className} 
            style={style} 
            ariaHidden="true"
        >
        </i>
    )
}

export const Search = ({ type = [], name = [], className = [], id = [], value = [], placeholder, style=[] }) => {
    return (
        <div>
            <form>
                <div className="input-group">
                    <div className="form-outline w-75">
                        <Input 
                            type={type[0]} 
                            name={name[0]} 
                            className={className[0]} 
                            id={id[0]} 
                            value={value[0]} 
                            placeholder={placeholder} 
                            style={style}
                        />
                    </div>
                        <Button 
                            type={type[1]} 
                            name={name[1]} 
                            value={value[1]} 
                            className={className[1]} 
                            id={id[1]}
                            style={style}
                        />
                </div>
            </form>
        </div>
    );
}

export const H = ({ type, value, className=null, style=null }) => {
    switch (type) {
        case "1":
            return (
                <h1 className={className} style={style}>{value}</h1>
            )
        case "2":
            return (
                <h2 className={className} style={style}>{value}</h2>
            )
        case "3":
            return (
                <h3 className={className} style={style}>{value}</h3>
            )
        case "4":
            return (
                <h4 className={className} style={style}>{value}</h4>
            )
        case "5":
            return (
                <h5 className={className} style={style}>{value}</h5>
            )
        case "6":
            return (
                <h6 className={className} style={style}>{value}</h6>
            )
        default:
            return (
                <h1></h1>
            )
    }
}
