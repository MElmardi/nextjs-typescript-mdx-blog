import Loader from "@ui/Loader";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { type IconType } from "react-icons";

const buttonStyles = cva(
  "flex flex-row mobile:cursor-default items-center justify-center rounded-lg font-semibold select-none outline-none ring-0 active:opacity-90 transition-cubic w-auto",
  {
    variants: {
      intent: {
        primary: "bg-brand hover:bg-brand-600 text-text-color-5 hover:shadow-md",
        gr: "btn-bg hover:bg-brand-600 text-text-color-5 hover:shadow-md",
        secondary: "bg-bg-color-3 hover:bg-brand/20 text-text-color-1",
        error: "bg-error-normal hover:bg-error-hover text-text-color-5 hover:shadow-md",
        disabled: "bg-bg-color-1 text-text-color-2 cursor-not-allowed hover:shadow-md",
        success: "bg-success-normal hover:bg-success-hover text-text-color-5 hover:shadow-md",
        ghost: "bg-transparent hover:bg-brand-400/10 text-brand",
        outline: "bg-transparent hover:bg-brand-400/10 text-brand border-brand border",
      },
      size: {
        xs: "text-xs px-3 py-1 max-h-[2rem] gap-1",
        small: "text-sm px-[12px] py-2 max-h-[2.3rem] gap-1",
        medium: "text-base px-5 py-2 max-h-[2.8rem] gap-2",
        large: "text-lg px-6 py-3 max-h-[3.2rem] gap-2",
      },
      noBorder: {
        true: "border-0 border-transparent",
        false: "border-white/10 border-t-[1px] border-l-[1px]",
      },
      hasLeftIcon: { true: "pl-1" },
      hasRightIcon: { true: "pr-1" },
      isLoading: { true: "pl-1" },
    },
    defaultVariants: {
      size: "medium",
      intent: "primary",
    },
  }
);

/**
 * @size small, medium, large
 * @intent primary, secondary, error, disabled, success
 * @leftIcon IconType from react-icons
 * @rightIcon IconType from react-icons
 * @noBorder boolean to remove border
 * @children button text or other elements (elements not recommended)
 * @isLoading boolean to show loader
 */
export default function Button({
  size,
  intent,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    leftIcon?: IconType;
    rightIcon?: IconType;
    isLoading?: boolean;
  }) {
  return (
    <button
      {...props}
      className={`${buttonStyles({
        size,
        intent: intent,
        hasLeftIcon: !!props.leftIcon,
        hasRightIcon: !!props.rightIcon,
        isLoading: !!props.isLoading,
      })} ${props?.className || ""}`}
    >
      {props.leftIcon && <props.leftIcon size={20} />}
      {props.isLoading && <Loader />}
      {props.children}
      {props.rightIcon && <props.rightIcon size={20} className="mr-1" />}
    </button>
  );
}
