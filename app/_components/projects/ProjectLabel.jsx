import { Uppercase } from '@/_components/text/TextStyles';
import ContainerPill from '@/_components/containers/ContainerPill';

function ProjectLabel({ isCourseWork, isUnderConstruction }) {
  if (!isCourseWork && !isUnderConstruction) return null;

  return (
    <ContainerPill theme='label' className='ml-2'>
      {isCourseWork && <Uppercase>Coursework</Uppercase>}
      {isUnderConstruction && <Uppercase>Under construction</Uppercase>}
    </ContainerPill>
  );
}

export default ProjectLabel;
