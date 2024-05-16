
interface MemberDetails {
    image: string
    name: string
    role: string
    description: string
    linkToLinkedIn?: string
}

const TeamMember = ({image, name, role, description, linkToLinkedIn}: MemberDetails) => {

    return (
        <div className="flex flex-col space-y-3 justify-center mx-auto text-center sm:p-4 lg:p-8 max-w-[300px]">
            <img src={ image } alt="Tema Member" className="w-32 mx-auto" />
            <p>{ name }</p>
            <small className="text-green text-xs">{ role }</small>
            <p className="font-light leading-5 text-gray-200/70">
                { description }
            </p>
            <a href={ linkToLinkedIn || '#'} className="text-gray-200 border border-green rounded-[25px] mx-auto px-6 py-1 text-center">
                LinkedIn</a>
        </div>
    )
}

export default TeamMember