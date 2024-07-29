'use client';
import { GenericButtonProps } from "@/presentation-ui/components/common/types";
import ButtonTypeLight from "@/presentation-ui/components/Button/GenericButton/ButtonTypeLight";
import ButtonTypeSolid from "@/presentation-ui/components/Button/GenericButton/ButtonTypeSolid";


const GenericButton = (props: GenericButtonProps) => {


  const getButtonType = (type: string) => {
    switch (type) {
      case 'solid':
        return <ButtonTypeSolid {...props} />;
      case 'light':
        return <ButtonTypeLight {...props} />;
      default:
        return <ButtonTypeSolid {...props} />;
    }
  }


  return (
    <>
      {getButtonType(props.type)}
    </>
  )
}

export default GenericButton