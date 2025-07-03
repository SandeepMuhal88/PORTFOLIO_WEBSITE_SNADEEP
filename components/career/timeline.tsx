"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Icons } from "@/components/common/icons";
import ChipContainer from "@/components/ui/chip-container";
import { careerExperiences } from "@/config/career";
import type { CareerExperienceInterface } from "@/config/career";

interface TimelineItemProps {
  post: CareerExperienceInterface;
  isLast: boolean;
  expandedId: string | null;
  toggleExpand: (id: string) => void;
}

const getYearFromDate = (date: Date): string => {
  return new Date(date).getFullYear().toString();
};

const TimelineItem: React.FC<TimelineItemProps> = ({ post, isLast, expandedId, toggleExpand }) => {
  const isExpanded = expandedId === post.id;

  return (
    <div className="relative">
      {!isLast && <div className="absolute left-4 sm:left-8 top-12 w-0.5 bg-border h-full z-0" />}

      <div className="flex mb-8 relative">
        <div className="relative">
          <motion.div
            className="w-8 h-8 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            {post.coverImage ? (
              <div className="relative w-8 h-8 sm:w-16 sm:h-16 rounded-full border-2 border-primary overflow-hidden bg-white">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
            ) : (
              <div className="w-8 h-8 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center">
                <Icons.gitRepoIcon className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
              </div>
            )}
          </motion.div>
        </div>

        <motion.div
          className="ml-3 sm:ml-6 flex-1"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            className={`p-3 sm:p-5 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 cursor-pointer ${isExpanded ? "shadow-md" : ""}`}
            onClick={() => toggleExpand(post.id)}
            whileHover={{ y: -2 }}
            layout
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <div>
                <h3 className="text-lg sm:text-xl font-bold">{post.title}</h3>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {new Date(post.date).toDateString()}
                </div>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Icons.chevronDown className="w-5 h-5 text-muted-foreground" />
              </motion.div>
            </div>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {isExpanded && (
                <div className="pt-3 mt-3 sm:pt-4 sm:mt-4 border-t border-border">
                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Content</h4>
                    <ul className="list-disc pl-4 sm:pl-5 space-y-1">
                      {post.content.map((line, idx) => (
                        <li key={idx} className="text-xs sm:text-sm">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Tags</h4>
                    <ChipContainer textArr={post.tags} />
                  </div>

                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-medium mb-1 sm:mb-2 text-xs sm:text-sm">Skills Used</h4>
                    <ChipContainer textArr={post.skills} />
                  </div>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.githubLink && (
                      <Link
                        href={post.githubLink}
                        className="inline-flex items-center text-xs sm:text-sm font-medium text-primary hover:underline"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                      >
                        GitHub Repo <Icons.chevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                      </Link>
                    )}
                    {post.liveDemoLink && (
                      <Link
                        href={post.liveDemoLink}
                        className="inline-flex items-center text-xs sm:text-sm font-medium text-primary hover:underline"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                      >
                        Live Demo <Icons.chevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const sortedPosts = [...careerExperiences].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  useEffect(() => {
    if (sortedPosts.length > 0 && expandedId === null) {
      setExpandedId(sortedPosts[0].id);
    }
  }, [sortedPosts, expandedId]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container max-w-5xl mx-auto py-4 sm:py-8 px-2 sm:px-4">
      {sortedPosts.map((post, index) => (
        <TimelineItem
          key={post.id}
          post={post}
          isLast={index === sortedPosts.length - 1}
          expandedId={expandedId}
          toggleExpand={toggleExpand}
        />
      ))}
    </div>
  );
};

export default Timeline;
