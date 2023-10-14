import { Dispatch, SetStateAction, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  AiFillDelete,
  AiFillFileText,
  AiOutlineCloudDownload,
} from "react-icons/ai";
import tesseract from "node-tesseract-ocr";
import { createWorker } from "tesseract.js";

interface Props {
  // submitting: boolean;
  // setData: Dispatch<SetStateAction<boolean | null>>;
  // file: { name: string } | null;
  // setFile: Dispatch<
  //   SetStateAction<{
  //     name: string;
  //   } | null>
  // >;
  // setDisabled: Dispatch<SetStateAction<boolean>>;
}

const Dropzone: React.FC<Props> = (
  {
    // submitting,
    // setData,
    // file,
    // setFile,
    // setDisabled,
  }
) => {
  const onDrop = useCallback(async (acceptedFiles: any) => {
    const worker = await createWorker("eng");
    const data = await worker.recognize(acceptedFiles[0]);
    console.log(data.data.text);
    await worker.terminate();
    // setFile(acceptedFiles[0]);
    // setDisabled(false);
  }, []);

  // const handleDelete = useCallback(() => {
  //   setFile(null);
  //   setData(null);
  //   setDisabled(true);
  // }, [setData, setFile, setDisabled]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
    },
    maxFiles: 1,
    onDrop,
  });

  return (
    <div className="flex flex-col w-full">
      <div
        {...getRootProps({ className: "dropzone" })}
        className="flex flex-col items-center justify-center border-2 border-neutral-200 border-dashed cursor-pointer duration-500 hover:opacity-50 rounded-lg shadow-lg h-64"
      >
        <input
          {...getInputProps({ name: "file" })}
          //  disabled={submitting}
        />
        <AiOutlineCloudDownload size={48} />
        <div>Drag & drop files here, or click to select files</div>
      </div>
      <br />
      <br />
      {/* {file && (
        <div className="relative flex flex-col">
          <div className="font-bold text-2xl">Uploaded File</div>
          <br />
          <AiFillDelete
            onClick={handleDelete}
            className="absolute top-[46px] left-[117px] text-red-400 cursor-pointer duration-500 hover:opacity-50"
            size={20}
          />
          <div className="flex flex-col text-center gap-2 items-center justify-center bg-white shadow-lg w-32 h-32 border-dashed border">
            <AiFillFileText size={48} />
            <div className="text-xs">{file.name}</div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Dropzone;
