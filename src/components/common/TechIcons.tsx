import ElasticsearchOriginal from 'devicons-react/icons/ElasticsearchOriginal';
import ReactOriginal from 'devicons-react/icons/ReactOriginal';
import TypescriptPlain from 'devicons-react/icons/TypescriptPlain';
import CsharpOriginal from 'devicons-react/icons/CsharpOriginal';
import PythonOriginal from 'devicons-react/icons/PythonOriginal';
import AmazonwebservicesOriginalWordmark from 'devicons-react/icons/AmazonwebservicesOriginalWordmark';
import MicrosoftsqlserverOriginal from 'devicons-react/icons/MicrosoftsqlserverOriginal';
import ApachekafkaOriginalWordmark from 'devicons-react/icons/ApachekafkaOriginalWordmark';
import FastapiOriginal from 'devicons-react/icons/FastapiOriginal';
import { SiOpenai } from 'react-icons/si'
import OpenapiOriginalWordmark from 'devicons-react/icons/OpenapiOriginalWordmark';
import NextjsPlain from 'devicons-react/icons/NextjsPlain';
import DockerPlain from 'devicons-react/icons/DockerPlain';


/**
 * https://devicons-react.vercel.app/latest
 */
export const TechIcons = {
  ElasticsearchOriginal,
  ReactOriginal,
  TypescriptPlain,
  CsharpOriginal,
  PythonOriginal,
  AmazonwebservicesOriginalWordmark,
  MicrosoftsqlserverOriginal,
  ApachekafkaOriginalWordmark,
  FastapiOriginal,
  OpenapiOriginalWordmark,
  SiOpenai,
  NextjsPlain,
  DockerPlain,
}

type IconWrapperProps = {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  Icon: React.ComponentType<any>; // bypasses strict typing on devicons-react
  size?: number;
  color?: string;
}

export function IconWrapper({ Icon, size = 80, color }: IconWrapperProps) {
  return <Icon style={{ width: size, height: size, color: color ?? undefined }} />
}
