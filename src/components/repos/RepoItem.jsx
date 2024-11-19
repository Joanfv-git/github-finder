import PropTypes from 'prop-types'
import { FaLink,FaEye,FaStar,FaInfo, FaUtensils } from 'react-icons/fa'


function RepoItem({repo}) {
    const{
        name,
        description,
        html_url,
        stargazers_count,
        watchers_count,
        forks,
        open_issues
    }=repo

  return (
    <div className='mb-2 rounded-md card bg-gray-700 hover:bg-gray-800'>
        <div className='card-body'>
           <h3 className='mb-2 text-xl font-semibold'>
                <a href={html_url} className='text-blue-300'><FaLink className="inline mr-1"></FaLink>{name}</a>
           </h3>
              <p className='mb-3 text-blue-200'>{description}</p>
              <div>
                <div className='mr-2 badge badge-info badge-lg'> 
                    <FaEye className='mr-2'></FaEye> {watchers_count}
                </div>
                <div className='mr-2 badge badge-success badge-lg'> 
                    <FaStar className='mr-2'></FaStar> {stargazers_count}
                </div>
                <div className='mr-2 badge badge-error badge-lg'> 
                    <FaInfo className='mr-2'></FaInfo> {open_issues}
                </div>
                <div className='mr-2 badge badge-warning badge-lg'> 
                    <FaUtensils className='mr-2'></FaUtensils> {forks}
                </div>
              </div>

        </div>


    </div>
  )
}



RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepoItem