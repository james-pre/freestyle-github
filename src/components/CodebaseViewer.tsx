import React from "react";
import type { CodebaseMetadata } from "../cloudstate/simple-repo";
import { format } from "timeago.js";
import { FileRow } from "./FileRow";
import { FileSystemViewer } from "./FileSystemViewer";
import Avatar from "./Avatar";

export const CodebaseViewer = (props: { codeMetadata: CodebaseMetadata }) => {
  const { codeMetadata } = props;
  return (
    <FileSystemViewer fileSystemMetadata={codeMetadata.files}>
      <div className="flex flex-row gap-2.5 items-center">
        <div className="flex flex-row gap-2 items-center">
          <div className="cursor-pointer">
            <a href={`/${codeMetadata.latestCommit.author.username}`}>
              <Avatar
                src={codeMetadata.latestCommit.author.avatar}
                alt={codeMetadata.latestCommit.author.username}
              />
            </a>
          </div>
          <a
            className="text-gray-100 font-bold hover:underline cursor-pointer"
            href={`/${codeMetadata.latestCommit.author.username}`}
          >
            {codeMetadata.latestCommit.author.username}
          </a>
        </div>
        <div className="text-gray-400">{codeMetadata.latestCommit.message}</div>
      </div>
      <div className="text-gray-400 text-xs">
        <span>{codeMetadata.latestCommit.shortHash}</span> •{" "}
        {format(codeMetadata.latestCommit.date)}
      </div>
    </FileSystemViewer>
  );
};
