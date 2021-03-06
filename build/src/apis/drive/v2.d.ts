/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { OAuth2Client, JWT, Compute, UserRefreshClient } from 'google-auth-library';
import { GoogleConfigurable, MethodOptions, GlobalOptions, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { GaxiosPromise } from 'gaxios';
export declare namespace drive_v2 {
    interface Options extends GlobalOptions {
        version: 'v2';
    }
    interface StandardParameters {
        /**
         * Data format for the response.
         */
        alt?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Deprecated. Please use quotaUser instead.
         */
        userIp?: string;
    }
    /**
     * Drive API
     *
     * Manages files in Drive including uploading, downloading, searching, detecting changes, and updating sharing permissions.
     *
     * @example
     * const {google} = require('googleapis');
     * const drive = google.drive('v2');
     *
     * @namespace drive
     * @type {Function}
     * @version v2
     * @variation v2
     * @param {object=} options Options for Drive
     */
    class Drive {
        context: APIRequestContext;
        about: Resource$About;
        apps: Resource$Apps;
        changes: Resource$Changes;
        channels: Resource$Channels;
        children: Resource$Children;
        comments: Resource$Comments;
        drives: Resource$Drives;
        files: Resource$Files;
        parents: Resource$Parents;
        permissions: Resource$Permissions;
        properties: Resource$Properties;
        realtime: Resource$Realtime;
        replies: Resource$Replies;
        revisions: Resource$Revisions;
        teamdrives: Resource$Teamdrives;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * An item with user information and settings.
     */
    interface Schema$About {
        /**
         * Information about supported additional roles per file type. The most specific type takes precedence.
         */
        additionalRoleInfo?: Array<{
            roleSets?: Array<{
                additionalRoles?: string[];
                primaryRole?: string;
            }>;
            type?: string;
        }>;
        /**
         * Whether the user can create shared drives.
         */
        canCreateDrives?: boolean;
        /**
         * Deprecated - use canCreateDrives instead.
         */
        canCreateTeamDrives?: boolean;
        /**
         * The domain sharing policy for the current user. Possible values are:   - allowed  - allowedWithWarning  - incomingOnly  - disallowed
         */
        domainSharingPolicy?: string;
        /**
         * A list of themes that are supported for shared drives.
         */
        driveThemes?: Array<{
            backgroundImageLink?: string;
            colorRgb?: string;
            id?: string;
        }>;
        /**
         * The ETag of the item.
         */
        etag?: string;
        /**
         * The allowable export formats.
         */
        exportFormats?: Array<{
            source?: string;
            targets?: string[];
        }>;
        /**
         * List of additional features enabled on this account.
         */
        features?: Array<{
            featureName?: string;
            featureRate?: number;
        }>;
        /**
         * The palette of allowable folder colors as RGB hex strings.
         */
        folderColorPalette?: string[];
        /**
         * The allowable import formats.
         */
        importFormats?: Array<{
            source?: string;
            targets?: string[];
        }>;
        /**
         * A boolean indicating whether the authenticated app is installed by the authenticated user.
         */
        isCurrentAppInstalled?: boolean;
        /**
         * This is always drive#about.
         */
        kind?: string;
        /**
         * The user&#39;s language or locale code, as defined by BCP 47, with some extensions from Unicode&#39;s LDML format (http://www.unicode.org/reports/tr35/).
         */
        languageCode?: string;
        /**
         * The largest change id.
         */
        largestChangeId?: string;
        /**
         * List of max upload sizes for each file type. The most specific type takes precedence.
         */
        maxUploadSizes?: Array<{
            size?: string;
            type?: string;
        }>;
        /**
         * The name of the current user.
         */
        name?: string;
        /**
         * The current user&#39;s ID as visible in the permissions collection.
         */
        permissionId?: string;
        /**
         * The amount of storage quota used by different Google services.
         */
        quotaBytesByService?: Array<{
            bytesUsed?: string;
            serviceName?: string;
        }>;
        /**
         * The total number of quota bytes.
         */
        quotaBytesTotal?: string;
        /**
         * The number of quota bytes used by Google Drive.
         */
        quotaBytesUsed?: string;
        /**
         * The number of quota bytes used by all Google apps (Drive, Picasa, etc.).
         */
        quotaBytesUsedAggregate?: string;
        /**
         * The number of quota bytes used by trashed items.
         */
        quotaBytesUsedInTrash?: string;
        /**
         * The type of the user&#39;s storage quota. Possible values are:   - LIMITED  - UNLIMITED
         */
        quotaType?: string;
        /**
         * The number of remaining change ids, limited to no more than 2500.
         */
        remainingChangeIds?: string;
        /**
         * The id of the root folder.
         */
        rootFolderId?: string;
        /**
         * A link back to this item.
         */
        selfLink?: string;
        /**
         * Deprecated - use driveThemes instead.
         */
        teamDriveThemes?: Array<{
            backgroundImageLink?: string;
            colorRgb?: string;
            id?: string;
        }>;
        /**
         * The authenticated user.
         */
        user?: Schema$User;
    }
    /**
     * The apps resource provides a list of the apps that a user has installed, with information about each app&#39;s supported MIME types, file extensions, and other details.
     */
    interface Schema$App {
        /**
         * Whether the app is authorized to access data on the user&#39;s Drive.
         */
        authorized?: boolean;
        /**
         * The template url to create a new file with this app in a given folder. The template will contain {folderId} to be replaced by the folder to create the new file in.
         */
        createInFolderTemplate?: string;
        /**
         * The url to create a new file with this app.
         */
        createUrl?: string;
        /**
         * Whether the app has drive-wide scope. An app with drive-wide scope can access all files in the user&#39;s drive.
         */
        hasDriveWideScope?: boolean;
        /**
         * The various icons for the app.
         */
        icons?: Array<{
            category?: string;
            iconUrl?: string;
            size?: number;
        }>;
        /**
         * The ID of the app.
         */
        id?: string;
        /**
         * Whether the app is installed.
         */
        installed?: boolean;
        /**
         * This is always drive#app.
         */
        kind?: string;
        /**
         * A long description of the app.
         */
        longDescription?: string;
        /**
         * The name of the app.
         */
        name?: string;
        /**
         * The type of object this app creates (e.g. Chart). If empty, the app name should be used instead.
         */
        objectType?: string;
        /**
         * The template url for opening files with this app. The template will contain {ids} and/or {exportIds} to be replaced by the actual file ids. See  Open Files  for the full documentation.
         */
        openUrlTemplate?: string;
        /**
         * The list of primary file extensions.
         */
        primaryFileExtensions?: string[];
        /**
         * The list of primary mime types.
         */
        primaryMimeTypes?: string[];
        /**
         * The ID of the product listing for this app.
         */
        productId?: string;
        /**
         * A link to the product listing for this app.
         */
        productUrl?: string;
        /**
         * The list of secondary file extensions.
         */
        secondaryFileExtensions?: string[];
        /**
         * The list of secondary mime types.
         */
        secondaryMimeTypes?: string[];
        /**
         * A short description of the app.
         */
        shortDescription?: string;
        /**
         * Whether this app supports creating new objects.
         */
        supportsCreate?: boolean;
        /**
         * Whether this app supports importing Google Docs.
         */
        supportsImport?: boolean;
        /**
         * Whether this app supports opening more than one file.
         */
        supportsMultiOpen?: boolean;
        /**
         * Whether this app supports creating new files when offline.
         */
        supportsOfflineCreate?: boolean;
        /**
         * Whether the app is selected as the default handler for the types it supports.
         */
        useByDefault?: boolean;
    }
    /**
     * A list of third-party applications which the user has installed or given access to Google Drive.
     */
    interface Schema$AppList {
        /**
         * List of app IDs that the user has specified to use by default. The list is in reverse-priority order (lowest to highest).
         */
        defaultAppIds?: string[];
        /**
         * The ETag of the list.
         */
        etag?: string;
        /**
         * The list of apps.
         */
        items?: Schema$App[];
        /**
         * This is always drive#appList.
         */
        kind?: string;
        /**
         * A link back to this list.
         */
        selfLink?: string;
    }
    /**
     * Representation of a change to a file or shared drive.
     */
    interface Schema$Change {
        /**
         * The type of the change. Possible values are file and drive.
         */
        changeType?: string;
        /**
         * Whether the file or shared drive has been removed from this list of changes, for example by deletion or loss of access.
         */
        deleted?: boolean;
        /**
         * The updated state of the shared drive. Present if the changeType is drive, the user is still a member of the shared drive, and the shared drive has not been deleted.
         */
        drive?: Schema$Drive;
        /**
         * The ID of the shared drive associated with this change.
         */
        driveId?: string;
        /**
         * The updated state of the file. Present if the type is file and the file has not been removed from this list of changes.
         */
        file?: Schema$File;
        /**
         * The ID of the file associated with this change.
         */
        fileId?: string;
        /**
         * The ID of the change.
         */
        id?: string;
        /**
         * This is always drive#change.
         */
        kind?: string;
        /**
         * The time of this modification.
         */
        modificationDate?: string;
        /**
         * A link back to this change.
         */
        selfLink?: string;
        /**
         * Deprecated - use drive instead.
         */
        teamDrive?: Schema$TeamDrive;
        /**
         * Deprecated - use driveId instead.
         */
        teamDriveId?: string;
        /**
         * Deprecated - use changeType instead.
         */
        type?: string;
    }
    /**
     * A list of changes for a user.
     */
    interface Schema$ChangeList {
        /**
         * The ETag of the list.
         */
        etag?: string;
        /**
         * The list of changes. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
         */
        items?: Schema$Change[];
        /**
         * This is always drive#changeList.
         */
        kind?: string;
        /**
         * The current largest change ID.
         */
        largestChangeId?: string;
        /**
         * The starting page token for future changes. This will be present only if the end of the current changes list has been reached.
         */
        newStartPageToken?: string;
        /**
         * A link to the next page of changes.
         */
        nextLink?: string;
        /**
         * The page token for the next page of changes. This will be absent if the end of the changes list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
         */
        nextPageToken?: string;
        /**
         * A link back to this list.
         */
        selfLink?: string;
    }
    /**
     * An notification channel used to watch for resource changes.
     */
    interface Schema$Channel {
        /**
         * The address where notifications are delivered for this channel.
         */
        address?: string;
        /**
         * Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.
         */
        expiration?: string;
        /**
         * A UUID or similar unique string that identifies this channel.
         */
        id?: string;
        /**
         * Identifies this as a notification channel used to watch for changes to a resource. Value: the fixed string &quot;api#channel&quot;.
         */
        kind?: string;
        /**
         * Additional parameters controlling delivery channel behavior. Optional.
         */
        params?: {
            [key: string]: string;
        };
        /**
         * A Boolean value to indicate whether payload is wanted. Optional.
         */
        payload?: boolean;
        /**
         * An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.
         */
        resourceId?: string;
        /**
         * A version-specific identifier for the watched resource.
         */
        resourceUri?: string;
        /**
         * An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.
         */
        token?: string;
        /**
         * The type of delivery mechanism used for this channel.
         */
        type?: string;
    }
    /**
     * A list of children of a file.
     */
    interface Schema$ChildList {
        /**
         * The ETag of the list.
         */
        etag?: string;
        /**
         * The list of children. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
         */
        items?: Schema$ChildReference[];
        /**
         * This is always drive#childList.
         */
        kind?: string;
        /**
         * A link to the next page of children.
         */
        nextLink?: string;
        /**
         * The page token for the next page of children. This will be absent if the end of the children list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
         */
        nextPageToken?: string;
        /**
         * A link back to this list.
         */
        selfLink?: string;
    }
    /**
     * A reference to a folder&#39;s child.
     */
    interface Schema$ChildReference {
        /**
         * A link to the child.
         */
        childLink?: string;
        /**
         * The ID of the child.
         */
        id?: string;
        /**
         * This is always drive#childReference.
         */
        kind?: string;
        /**
         * A link back to this reference.
         */
        selfLink?: string;
    }
    /**
     * A comment on a file in Google Drive.
     */
    interface Schema$Comment {
        /**
         * A region of the document represented as a JSON string. See anchor documentation for details on how to define and interpret anchor properties.
         */
        anchor?: string;
        /**
         * The user who wrote this comment.
         */
        author?: Schema$User;
        /**
         * The ID of the comment.
         */
        commentId?: string;
        /**
         * The plain text content used to create this comment. This is not HTML safe and should only be used as a starting point to make edits to a comment&#39;s content.
         */
        content?: string;
        /**
         * The context of the file which is being commented on.
         */
        context?: {
            type?: string;
            value?: string;
        };
        /**
         * The date when this comment was first created.
         */
        createdDate?: string;
        /**
         * Whether this comment has been deleted. If a comment has been deleted the content will be cleared and this will only represent a comment that once existed.
         */
        deleted?: boolean;
        /**
         * The file which this comment is addressing.
         */
        fileId?: string;
        /**
         * The title of the file which this comment is addressing.
         */
        fileTitle?: string;
        /**
         * HTML formatted content for this comment.
         */
        htmlContent?: string;
        /**
         * This is always drive#comment.
         */
        kind?: string;
        /**
         * The date when this comment or any of its replies were last modified.
         */
        modifiedDate?: string;
        /**
         * Replies to this post.
         */
        replies?: Schema$CommentReply[];
        /**
         * A link back to this comment.
         */
        selfLink?: string;
        /**
         * The status of this comment. Status can be changed by posting a reply to a comment with the desired status.   - &quot;open&quot; - The comment is still open.  - &quot;resolved&quot; - The comment has been resolved by one of its replies.
         */
        status?: string;
    }
    /**
     * A list of comments on a file in Google Drive.
     */
    interface Schema$CommentList {
        /**
         * The list of comments. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
         */
        items?: Schema$Comment[];
        /**
         * This is always drive#commentList.
         */
        kind?: string;
        /**
         * A link to the next page of comments.
         */
        nextLink?: string;
        /**
         * The page token for the next page of comments. This will be absent if the end of the comments list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
         */
        nextPageToken?: string;
        /**
         * A link back to this list.
         */
        selfLink?: string;
    }
    /**
     * A comment on a file in Google Drive.
     */
    interface Schema$CommentReply {
        /**
         * The user who wrote this reply.
         */
        author?: Schema$User;
        /**
         * The plain text content used to create this reply. This is not HTML safe and should only be used as a starting point to make edits to a reply&#39;s content. This field is required on inserts if no verb is specified (resolve/reopen).
         */
        content?: string;
        /**
         * The date when this reply was first created.
         */
        createdDate?: string;
        /**
         * Whether this reply has been deleted. If a reply has been deleted the content will be cleared and this will only represent a reply that once existed.
         */
        deleted?: boolean;
        /**
         * HTML formatted content for this reply.
         */
        htmlContent?: string;
        /**
         * This is always drive#commentReply.
         */
        kind?: string;
        /**
         * The date when this reply was last modified.
         */
        modifiedDate?: string;
        /**
         * The ID of the reply.
         */
        replyId?: string;
        /**
         * The action this reply performed to the parent comment. When creating a new reply this is the action to be perform to the parent comment. Possible values are:   - &quot;resolve&quot; - To resolve a comment.  - &quot;reopen&quot; - To reopen (un-resolve) a comment.
         */
        verb?: string;
    }
    /**
     * A list of replies to a comment on a file in Google Drive.
     */
    interface Schema$CommentReplyList {
        /**
         * The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
         */
        items?: Schema$CommentReply[];
        /**
         * This is always drive#commentReplyList.
         */
        kind?: string;
        /**
         * A link to the next page of replies.
         */
        nextLink?: string;
        /**
         * The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
         */
        nextPageToken?: string;
        /**
         * A link back to this list.
         */
        selfLink?: string;
    }
    /**
     * Representation of a shared drive.
     */
    interface Schema$Drive {
        /**
         * An image file and cropping parameters from which a background image for this shared drive is set. This is a write only field; it can only be set on drive.drives.update requests that don&#39;t set themeId. When specified, all fields of the backgroundImageFile must be set.
         */
        backgroundImageFile?: {
            id?: string;
            width?: number;
            xCoordinate?: number;
            yCoordinate?: number;
        };
        /**
         * A short-lived link to this shared drive&#39;s background image.
         */
        backgroundImageLink?: string;
        /**
         * Capabilities the current user has on this shared drive.
         */
        capabilities?: {
            canAddChildren?: boolean;
            canChangeCopyRequiresWriterPermissionRestriction?: boolean;
            canChangeDomainUsersOnlyRestriction?: boolean;
            canChangeDriveBackground?: boolean;
            canChangeDriveMembersOnlyRestriction?: boolean;
            canComment?: boolean;
            canCopy?: boolean;
            canDeleteChildren?: boolean;
            canDeleteDrive?: boolean;
            canDownload?: boolean;
            canEdit?: boolean;
            canListChildren?: boolean;
            canManageMembers?: boolean;
            canReadRevisions?: boolean;
            canRename?: boolean;
            canRenameDrive?: boolean;
            canShare?: boolean;
            canTrashChildren?: boolean;
        };
        /**
         * The color of this shared drive as an RGB hex string. It can only be set on a drive.drives.update request that does not set themeId.
         */
        colorRgb?: string;
        /**
         * The time at which the shared drive was created (RFC 3339 date-time).
         */
        createdDate?: string;
        /**
         * Whether the shared drive is hidden from default view.
         */
        hidden?: boolean;
        /**
         * The ID of this shared drive which is also the ID of the top level folder of this shared drive.
         */
        id?: string;
        /**
         * This is always drive#drive
         */
        kind?: string;
        /**
         * The name of this shared drive.
         */
        name?: string;
        /**
         * A set of restrictions that apply to this shared drive or items inside this shared drive.
         */
        restrictions?: {
            adminManagedRestrictions?: boolean;
            copyRequiresWriterPermission?: boolean;
            domainUsersOnly?: boolean;
            driveMembersOnly?: boolean;
        };
        /**
         * The ID of the theme from which the background image and color will be set. The set of possible driveThemes can be retrieved from a drive.about.get response. When not specified on a drive.drives.insert request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don&#39;t set colorRgb or backgroundImageFile.
         */
        themeId?: string;
    }
    /**
     * A list of shared drives.
     */
    interface Schema$DriveList {
        /**
         * The list of shared drives. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
         */
        items?: Schema$Drive[];
        /**
         * This is always drive#driveList
         */
        kind?: string;
        /**
         * The page token for the next page of shared drives. This will be absent if the end of the list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
         */
        nextPageToken?: string;
    }
    /**
     * The metadata for a file.
     */
    interface Schema$File {
        /**
         * A link for opening the file in a relevant Google editor or viewer.
         */
        alternateLink?: string;
        /**
         * Whether this file is in the Application Data folder.
         */
        appDataContents?: boolean;
        /**
         * Deprecated: use capabilities/canComment.
         */
        canComment?: boolean;
        /**
         * Deprecated: use capabilities/canReadRevisions.
         */
        canReadRevisions?: boolean;
        /**
         * Capabilities the current user has on this file. Each capability corresponds to a fine-grained action that a user may take.
         */
        capabilities?: {
            canAddChildren?: boolean;
            canChangeCopyRequiresWriterPermission?: boolean;
            canChangeRestrictedDownload?: boolean;
            canComment?: boolean;
            canCopy?: boolean;
            canDelete?: boolean;
            canDeleteChildren?: boolean;
            canDownload?: boolean;
            canEdit?: boolean;
            canListChildren?: boolean;
            canMoveChildrenOutOfDrive?: boolean;
            canMoveChildrenOutOfTeamDrive?: boolean;
            canMoveChildrenWithinDrive?: boolean;
            canMoveChildrenWithinTeamDrive?: boolean;
            canMoveItemIntoTeamDrive?: boolean;
            canMoveItemOutOfDrive?: boolean;
            canMoveItemOutOfTeamDrive?: boolean;
            canMoveItemWithinDrive?: boolean;
            canMoveItemWithinTeamDrive?: boolean;
            canMoveTeamDriveItem?: boolean;
            canReadDrive?: boolean;
            canReadRevisions?: boolean;
            canReadTeamDrive?: boolean;
            canRemoveChildren?: boolean;
            canRename?: boolean;
            canShare?: boolean;
            canTrash?: boolean;
            canTrashChildren?: boolean;
            canUntrash?: boolean;
        };
        /**
         * Deprecated: use capabilities/canCopy.
         */
        copyable?: boolean;
        /**
         * Whether the options to copy, print, or download this file, should be disabled for readers and commenters.
         */
        copyRequiresWriterPermission?: boolean;
        /**
         * Create time for this file (formatted RFC 3339 timestamp).
         */
        createdDate?: string;
        /**
         * A link to open this file with the user&#39;s default app for this file. Only populated when the drive.apps.readonly scope is used.
         */
        defaultOpenWithLink?: string;
        /**
         * A short description of the file.
         */
        description?: string;
        /**
         * Short lived download URL for the file. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files.
         */
        downloadUrl?: string;
        /**
         * ID of the shared drive the file resides in. Only populated for items in shared drives.
         */
        driveId?: string;
        /**
         * Deprecated: use capabilities/canEdit.
         */
        editable?: boolean;
        /**
         * A link for embedding the file.
         */
        embedLink?: string;
        /**
         * ETag of the file.
         */
        etag?: string;
        /**
         * Whether this file has been explicitly trashed, as opposed to recursively trashed.
         */
        explicitlyTrashed?: boolean;
        /**
         * Links for exporting Google Docs to specific formats.
         */
        exportLinks?: {
            [key: string]: string;
        };
        /**
         * The final component of fullFileExtension with trailing text that does not appear to be part of the extension removed. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files.
         */
        fileExtension?: string;
        /**
         * The size of the file in bytes. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files.
         */
        fileSize?: string;
        /**
         * Folder color as an RGB hex string if the file is a folder. The list of supported colors is available in the folderColorPalette field of the About resource. If an unsupported color is specified, it will be changed to the closest color in the palette. Not populated for items in shared drives.
         */
        folderColorRgb?: string;
        /**
         * The full file extension; extracted from the title. May contain multiple concatenated extensions, such as &quot;tar.gz&quot;. Removing an extension from the title does not clear this field; however, changing the extension on the title does update this field. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files.
         */
        fullFileExtension?: string;
        /**
         * Whether any users are granted file access directly on this file. This field is only populated for items in shared drives.
         */
        hasAugmentedPermissions?: boolean;
        /**
         * Whether this file has a thumbnail. This does not indicate whether the requesting app has access to the thumbnail. To check access, look for the presence of the thumbnailLink field.
         */
        hasThumbnail?: boolean;
        /**
         * The ID of the file&#39;s head revision. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files.
         */
        headRevisionId?: string;
        /**
         * A link to the file&#39;s icon.
         */
        iconLink?: string;
        /**
         * The ID of the file.
         */
        id?: string;
        /**
         * Metadata about image media. This will only be present for image types, and its contents will depend on what can be parsed from the image content.
         */
        imageMediaMetadata?: {
            aperture?: number;
            cameraMake?: string;
            cameraModel?: string;
            colorSpace?: string;
            date?: string;
            exposureBias?: number;
            exposureMode?: string;
            exposureTime?: number;
            flashUsed?: boolean;
            focalLength?: number;
            height?: number;
            isoSpeed?: number;
            lens?: string;
            location?: {
                altitude?: number;
                latitude?: number;
                longitude?: number;
            };
            maxApertureValue?: number;
            meteringMode?: string;
            rotation?: number;
            sensor?: string;
            subjectDistance?: number;
            whiteBalance?: string;
            width?: number;
        };
        /**
         * Indexable text attributes for the file (can only be written)
         */
        indexableText?: {
            text?: string;
        };
        /**
         * Whether the file was created or opened by the requesting app.
         */
        isAppAuthorized?: boolean;
        /**
         * The type of file. This is always drive#file.
         */
        kind?: string;
        /**
         * A group of labels for the file.
         */
        labels?: {
            hidden?: boolean;
            modified?: boolean;
            restricted?: boolean;
            starred?: boolean;
            trashed?: boolean;
            viewed?: boolean;
        };
        /**
         * The last user to modify this file.
         */
        lastModifyingUser?: Schema$User;
        /**
         * Name of the last user to modify this file.
         */
        lastModifyingUserName?: string;
        /**
         * Last time this file was viewed by the user (formatted RFC 3339 timestamp).
         */
        lastViewedByMeDate?: string;
        /**
         * Deprecated.
         */
        markedViewedByMeDate?: string;
        /**
         * An MD5 checksum for the content of this file. This field is only populated for files with content stored in Google Drive; it is not populated for Google Docs or shortcut files.
         */
        md5Checksum?: string;
        /**
         * The MIME type of the file. This is only mutable on update when uploading new content. This field can be left blank, and the mimetype will be determined from the uploaded content&#39;s MIME type.
         */
        mimeType?: string;
        /**
         * Last time this file was modified by the user (formatted RFC 3339 timestamp). Note that setting modifiedDate will also update the modifiedByMe date for the user which set the date.
         */
        modifiedByMeDate?: string;
        /**
         * Last time this file was modified by anyone (formatted RFC 3339 timestamp). This is only mutable on update when the setModifiedDate parameter is set.
         */
        modifiedDate?: string;
        /**
         * A map of the id of each of the user&#39;s apps to a link to open this file with that app. Only populated when the drive.apps.readonly scope is used.
         */
        openWithLinks?: {
            [key: string]: string;
        };
        /**
         * The original filename of the uploaded content if available, or else the original value of the title field. This is only available for files with binary content in Google Drive.
         */
        originalFilename?: string;
        /**
         * Whether the file is owned by the current user. Not populated for items in shared drives.
         */
        ownedByMe?: boolean;
        /**
         * Name(s) of the owner(s) of this file. Not populated for items in shared drives.
         */
        ownerNames?: string[];
        /**
         * The owner(s) of this file. Not populated for items in shared drives.
         */
        owners?: Schema$User[];
        /**
         * Collection of parent folders which contain this file. If not specified as part of an insert request, the file will be placed directly in the user&#39;s My Drive folder. If not specified as part of a copy request, the file will inherit any discoverable parents of the source file. Update requests can also use the addParents and removeParents parameters to modify the parents list.
         */
        parents?: Schema$ParentReference[];
        /**
         * List of permission IDs for users with access to this file.
         */
        permissionIds?: string[];
        /**
         * The list of permissions for users with access to this file. Not populated for items in shared drives.
         */
        permissions?: Schema$Permission[];
        /**
         * The list of properties.
         */
        properties?: Schema$Property[];
        /**
         * The number of quota bytes used by this file.
         */
        quotaBytesUsed?: string;
        /**
         * A link back to this file.
         */
        selfLink?: string;
        /**
         * Deprecated: use capabilities/canShare.
         */
        shareable?: boolean;
        /**
         * Whether the file has been shared. Not populated for items in shared drives.
         */
        shared?: boolean;
        /**
         * Time at which this file was shared with the user (formatted RFC 3339 timestamp).
         */
        sharedWithMeDate?: string;
        /**
         * User that shared the item with the current user, if available.
         */
        sharingUser?: Schema$User;
        /**
         * The list of spaces which contain the file. Supported values are &#39;drive&#39;, &#39;appDataFolder&#39; and &#39;photos&#39;.
         */
        spaces?: string[];
        /**
         * Deprecated - use driveId instead.
         */
        teamDriveId?: string;
        /**
         * A thumbnail for the file. This will only be used if a standard thumbnail cannot be generated.
         */
        thumbnail?: {
            image?: string;
            mimeType?: string;
        };
        /**
         * A short-lived link to the file&#39;s thumbnail. Typically lasts on the order of hours. Only populated when the requesting app can access the file&#39;s content.
         */
        thumbnailLink?: string;
        /**
         * The thumbnail version for use in thumbnail cache invalidation.
         */
        thumbnailVersion?: string;
        /**
         * The title of this file. Note that for immutable items such as the top level folders of shared drives, My Drive root folder, and Application Data folder the title is constant.
         */
        title?: string;
        /**
         * The time that the item was trashed (formatted RFC 3339 timestamp). Only populated for items in shared drives.
         */
        trashedDate?: string;
        /**
         * If the file has been explicitly trashed, the user who trashed it. Only populated for items in shared drives.
         */
        trashingUser?: Schema$User;
        /**
         * The permissions for the authenticated user on this file.
         */
        userPermission?: Schema$Permission;
        /**
         * A monotonically increasing version number for the file. This reflects every change made to the file on the server, even those not visible to the requesting user.
         */
        version?: string;
        /**
         * Metadata about video media. This will only be present for video types.
         */
        videoMediaMetadata?: {
            durationMillis?: string;
            height?: number;
            width?: number;
        };
        /**
         * A link for downloading the content of the file in a browser using cookie based authentication. In cases where the content is shared publicly, the content can be downloaded without any credentials.
         */
        webContentLink?: string;
        /**
         * A link only available on public folders for viewing their static web assets (HTML, CSS, JS, etc) via Google Drive&#39;s Website Hosting.
         */
        webViewLink?: string;
        /**
         * Whether writers can share the document with other users. Not populated for items in shared drives.
         */
        writersCanShare?: boolean;
    }
    /**
     * A list of files.
     */
    interface Schema$FileList {
        /**
         * The ETag of the list.
         */
        etag?: string;
        /**
         * Whether the search process was incomplete. If true, then some search results may be missing, since all documents were not searched. This may occur when searching multiple drives with the &quot;allDrives&quot; corpora, but all corpora could not be searched. When this happens, it is suggested that clients narrow their query by choosing a different corpus such as &quot;default&quot; or &quot;drive&quot;.
         */
        incompleteSearch?: boolean;
        /**
         * The list of files. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
         */
        items?: Schema$File[];
        /**
         * This is always drive#fileList.
         */
        kind?: string;
        /**
         * A link to the next page of files.
         */
        nextLink?: string;
        /**
         * The page token for the next page of files. This will be absent if the end of the files list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
         */
        nextPageToken?: string;
        /**
         * A link back to this list.
         */
        selfLink?: string;
    }
    /**
     * A list of generated IDs which can be provided in insert requests
     */
    interface Schema$GeneratedIds {
        /**
         * The IDs generated for the requesting user in the specified space.
         */
        ids?: string[];
        /**
         * This is always drive#generatedIds
         */
        kind?: string;
        /**
         * The type of file that can be created with these IDs.
         */
        space?: string;
    }
    /**
     * A list of a file&#39;s parents.
     */
    interface Schema$ParentList {
        /**
         * The ETag of the list.
         */
        etag?: string;
        /**
         * The list of parents.
         */
        items?: Schema$ParentReference[];
        /**
         * This is always drive#parentList.
         */
        kind?: string;
        /**
         * A link back to this list.
         */
        selfLink?: string;
    }
    /**
     * A reference to a file&#39;s parent.
     */
    interface Schema$ParentReference {
        /**
         * The ID of the parent.
         */
        id?: string;
        /**
         * Whether or not the parent is the root folder.
         */
        isRoot?: boolean;
        /**
         * This is always drive#parentReference.
         */
        kind?: string;
        /**
         * A link to the parent.
         */
        parentLink?: string;
        /**
         * A link back to this reference.
         */
        selfLink?: string;
    }
    /**
     * A permission for a file.
     */
    interface Schema$Permission {
        /**
         * Additional roles for this user. Only commenter is currently allowed, though more may be supported in the future.
         */
        additionalRoles?: string[];
        /**
         * Deprecated.
         */
        authKey?: string;
        /**
         * Whether the account associated with this permission has been deleted. This field only pertains to user and group permissions.
         */
        deleted?: boolean;
        /**
         * The domain name of the entity this permission refers to. This is an output-only field which is present when the permission type is user, group or domain.
         */
        domain?: string;
        /**
         * The email address of the user or group this permission refers to. This is an output-only field which is present when the permission type is user or group.
         */
        emailAddress?: string;
        /**
         * The ETag of the permission.
         */
        etag?: string;
        /**
         * The time at which this permission will expire (RFC 3339 date-time). Expiration dates have the following restrictions:   - They can only be set on user and group permissions  - The date must be in the future  - The date cannot be more than a year in the future  - The date can only be set on drive.permissions.update or drive.permissions.patch requests
         */
        expirationDate?: string;
        /**
         * The ID of the user this permission refers to, and identical to the permissionId in the About and Files resources. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
         */
        id?: string;
        /**
         * This is always drive#permission.
         */
        kind?: string;
        /**
         * The name for this permission.
         */
        name?: string;
        /**
         * Details of whether the permissions on this shared drive item are inherited or directly on this item. This is an output-only field which is present only for shared drive items.
         */
        permissionDetails?: Array<{
            additionalRoles?: string[];
            inherited?: boolean;
            inheritedFrom?: string;
            permissionType?: string;
            role?: string;
        }>;
        /**
         * A link to the profile photo, if available.
         */
        photoLink?: string;
        /**
         * The primary role for this user. While new values may be supported in the future, the following are currently allowed:   - owner  - organizer  - fileOrganizer  - writer  - reader
         */
        role?: string;
        /**
         * A link back to this permission.
         */
        selfLink?: string;
        /**
         * Deprecated - use permissionDetails instead.
         */
        teamDrivePermissionDetails?: Array<{
            additionalRoles?: string[];
            inherited?: boolean;
            inheritedFrom?: string;
            role?: string;
            teamDrivePermissionType?: string;
        }>;
        /**
         * The account type. Allowed values are:   - user  - group  - domain  - anyone
         */
        type?: string;
        /**
         * The email address or domain name for the entity. This is used during inserts and is not populated in responses. When making a drive.permissions.insert request, exactly one of the id or value fields must be specified unless the permission type is anyone, in which case both id and value are ignored.
         */
        value?: string;
        /**
         * Whether the link is required for this permission.
         */
        withLink?: boolean;
    }
    /**
     * An ID for a user or group as seen in Permission items.
     */
    interface Schema$PermissionId {
        /**
         * The permission ID.
         */
        id?: string;
        /**
         * This is always drive#permissionId.
         */
        kind?: string;
    }
    /**
     * A list of permissions associated with a file.
     */
    interface Schema$PermissionList {
        /**
         * The ETag of the list.
         */
        etag?: string;
        /**
         * The list of permissions.
         */
        items?: Schema$Permission[];
        /**
         * This is always drive#permissionList.
         */
        kind?: string;
        /**
         * The page token for the next page of permissions. This field will be absent if the end of the permissions list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results.
         */
        nextPageToken?: string;
        /**
         * A link back to this list.
         */
        selfLink?: string;
    }
    /**
     * A key-value pair attached to a file that is either public or private to an application. The following limits apply to file properties:   - Maximum of 100 properties total per file - Maximum of 30 private properties per app - Maximum of 30 public properties - Maximum of 124 bytes size limit on (key + value) string in UTF-8 encoding for a single property.
     */
    interface Schema$Property {
        /**
         * ETag of the property.
         */
        etag?: string;
        /**
         * The key of this property.
         */
        key?: string;
        /**
         * This is always drive#property.
         */
        kind?: string;
        /**
         * The link back to this property.
         */
        selfLink?: string;
        /**
         * The value of this property.
         */
        value?: string;
        /**
         * The visibility of this property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
         */
        visibility?: string;
    }
    /**
     * A collection of properties, key-value pairs that are either public or private to an application.
     */
    interface Schema$PropertyList {
        /**
         * The ETag of the list.
         */
        etag?: string;
        /**
         * The list of properties.
         */
        items?: Schema$Property[];
        /**
         * This is always drive#propertyList.
         */
        kind?: string;
        /**
         * The link back to this list.
         */
        selfLink?: string;
    }
    /**
     * A revision of a file.
     */
    interface Schema$Revision {
        /**
         * Short term download URL for the file. This will only be populated on files with content stored in Drive.
         */
        downloadUrl?: string;
        /**
         * The ETag of the revision.
         */
        etag?: string;
        /**
         * Links for exporting Google Docs to specific formats.
         */
        exportLinks?: {
            [key: string]: string;
        };
        /**
         * The size of the revision in bytes. This will only be populated on files with content stored in Drive.
         */
        fileSize?: string;
        /**
         * The ID of the revision.
         */
        id?: string;
        /**
         * This is always drive#revision.
         */
        kind?: string;
        /**
         * The last user to modify this revision.
         */
        lastModifyingUser?: Schema$User;
        /**
         * Name of the last user to modify this revision.
         */
        lastModifyingUserName?: string;
        /**
         * An MD5 checksum for the content of this revision. This will only be populated on files with content stored in Drive.
         */
        md5Checksum?: string;
        /**
         * The MIME type of the revision.
         */
        mimeType?: string;
        /**
         * Last time this revision was modified (formatted RFC 3339 timestamp).
         */
        modifiedDate?: string;
        /**
         * The original filename when this revision was created. This will only be populated on files with content stored in Drive.
         */
        originalFilename?: string;
        /**
         * Whether this revision is pinned to prevent automatic purging. This will only be populated and can only be modified on files with content stored in Drive which are not Google Docs. Revisions can also be pinned when they are created through the drive.files.insert/update/copy by using the pinned query parameter.
         */
        pinned?: boolean;
        /**
         * Whether subsequent revisions will be automatically republished. This is only populated and can only be modified for Google Docs.
         */
        publishAuto?: boolean;
        /**
         * Whether this revision is published. This is only populated and can only be modified for Google Docs.
         */
        published?: boolean;
        /**
         * A link to the published revision.
         */
        publishedLink?: string;
        /**
         * Whether this revision is published outside the domain. This is only populated and can only be modified for Google Docs.
         */
        publishedOutsideDomain?: boolean;
        /**
         * A link back to this revision.
         */
        selfLink?: string;
    }
    /**
     * A list of revisions of a file.
     */
    interface Schema$RevisionList {
        /**
         * The ETag of the list.
         */
        etag?: string;
        /**
         * The list of revisions. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched.
         */
        items?: Schema$Revision[];
        /**
         * This is always drive#revisionList.
         */
        kind?: string;
        /**
         * The page token for the next page of revisions. This field will be absent if the end of the revisions list has been reached. If the token is rejected for any reason, it should be discarded and pagination should be restarted from the first page of results.
         */
        nextPageToken?: string;
        /**
         * A link back to this list.
         */
        selfLink?: string;
    }
    interface Schema$StartPageToken {
        /**
         * Identifies what kind of resource this is. Value: the fixed string &quot;drive#startPageToken&quot;.
         */
        kind?: string;
        /**
         * The starting page token for listing changes.
         */
        startPageToken?: string;
    }
    /**
     * Deprecated: use the drive collection instead.
     */
    interface Schema$TeamDrive {
        /**
         * An image file and cropping parameters from which a background image for this Team Drive is set. This is a write only field; it can only be set on drive.teamdrives.update requests that don&#39;t set themeId. When specified, all fields of the backgroundImageFile must be set.
         */
        backgroundImageFile?: {
            id?: string;
            width?: number;
            xCoordinate?: number;
            yCoordinate?: number;
        };
        /**
         * A short-lived link to this Team Drive&#39;s background image.
         */
        backgroundImageLink?: string;
        /**
         * Capabilities the current user has on this Team Drive.
         */
        capabilities?: {
            canAddChildren?: boolean;
            canChangeCopyRequiresWriterPermissionRestriction?: boolean;
            canChangeDomainUsersOnlyRestriction?: boolean;
            canChangeTeamDriveBackground?: boolean;
            canChangeTeamMembersOnlyRestriction?: boolean;
            canComment?: boolean;
            canCopy?: boolean;
            canDeleteChildren?: boolean;
            canDeleteTeamDrive?: boolean;
            canDownload?: boolean;
            canEdit?: boolean;
            canListChildren?: boolean;
            canManageMembers?: boolean;
            canReadRevisions?: boolean;
            canRemoveChildren?: boolean;
            canRename?: boolean;
            canRenameTeamDrive?: boolean;
            canShare?: boolean;
            canTrashChildren?: boolean;
        };
        /**
         * The color of this Team Drive as an RGB hex string. It can only be set on a drive.teamdrives.update request that does not set themeId.
         */
        colorRgb?: string;
        /**
         * The time at which the Team Drive was created (RFC 3339 date-time).
         */
        createdDate?: string;
        /**
         * The ID of this Team Drive which is also the ID of the top level folder of this Team Drive.
         */
        id?: string;
        /**
         * This is always drive#teamDrive
         */
        kind?: string;
        /**
         * The name of this Team Drive.
         */
        name?: string;
        /**
         * A set of restrictions that apply to this Team Drive or items inside this Team Drive.
         */
        restrictions?: {
            adminManagedRestrictions?: boolean;
            copyRequiresWriterPermission?: boolean;
            domainUsersOnly?: boolean;
            teamMembersOnly?: boolean;
        };
        /**
         * The ID of the theme from which the background image and color will be set. The set of possible teamDriveThemes can be retrieved from a drive.about.get response. When not specified on a drive.teamdrives.insert request, a random theme is chosen from which the background image and color are set. This is a write-only field; it can only be set on requests that don&#39;t set colorRgb or backgroundImageFile.
         */
        themeId?: string;
    }
    /**
     * A list of Team Drives.
     */
    interface Schema$TeamDriveList {
        /**
         * The list of Team Drives.
         */
        items?: Schema$TeamDrive[];
        /**
         * This is always drive#teamDriveList
         */
        kind?: string;
        /**
         * The page token for the next page of Team Drives.
         */
        nextPageToken?: string;
    }
    /**
     * Information about a Drive user.
     */
    interface Schema$User {
        /**
         * A plain text displayable name for this user.
         */
        displayName?: string;
        /**
         * The email address of the user.
         */
        emailAddress?: string;
        /**
         * Whether this user is the same as the authenticated user for whom the request was made.
         */
        isAuthenticatedUser?: boolean;
        /**
         * This is always drive#user.
         */
        kind?: string;
        /**
         * The user&#39;s ID as visible in the permissions collection.
         */
        permissionId?: string;
        /**
         * The user&#39;s profile picture.
         */
        picture?: {
            url?: string;
        };
    }
    class Resource$About {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.about.get
         * @desc Gets the information about the current user along with Drive API settings
         * @alias drive.about.get
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {boolean=} params.includeSubscribed Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the maxChangeIdCount.
         * @param {string=} params.maxChangeIdCount Maximum number of remaining change IDs to count
         * @param {string=} params.startChangeId Change ID to start counting from when calculating number of remaining change IDs
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$About$Get, options?: MethodOptions): GaxiosPromise<Schema$About>;
        get(params: Params$Resource$About$Get, options: MethodOptions | BodyResponseCallback<Schema$About>, callback: BodyResponseCallback<Schema$About>): void;
        get(params: Params$Resource$About$Get, callback: BodyResponseCallback<Schema$About>): void;
        get(callback: BodyResponseCallback<Schema$About>): void;
    }
    interface Params$Resource$About$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Whether to count changes outside the My Drive hierarchy. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the maxChangeIdCount.
         */
        includeSubscribed?: boolean;
        /**
         * Maximum number of remaining change IDs to count
         */
        maxChangeIdCount?: string;
        /**
         * Change ID to start counting from when calculating number of remaining change IDs
         */
        startChangeId?: string;
    }
    class Resource$Apps {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.apps.get
         * @desc Gets a specific app.
         * @alias drive.apps.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.appId The ID of the app.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Apps$Get, options?: MethodOptions): GaxiosPromise<Schema$App>;
        get(params: Params$Resource$Apps$Get, options: MethodOptions | BodyResponseCallback<Schema$App>, callback: BodyResponseCallback<Schema$App>): void;
        get(params: Params$Resource$Apps$Get, callback: BodyResponseCallback<Schema$App>): void;
        get(callback: BodyResponseCallback<Schema$App>): void;
        /**
         * drive.apps.list
         * @desc Lists a user's installed apps.
         * @alias drive.apps.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.appFilterExtensions A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.
         * @param {string=} params.appFilterMimeTypes A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.
         * @param {string=} params.languageCode A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Apps$List, options?: MethodOptions): GaxiosPromise<Schema$AppList>;
        list(params: Params$Resource$Apps$List, options: MethodOptions | BodyResponseCallback<Schema$AppList>, callback: BodyResponseCallback<Schema$AppList>): void;
        list(params: Params$Resource$Apps$List, callback: BodyResponseCallback<Schema$AppList>): void;
        list(callback: BodyResponseCallback<Schema$AppList>): void;
    }
    interface Params$Resource$Apps$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the app.
         */
        appId?: string;
    }
    interface Params$Resource$Apps$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * A comma-separated list of file extensions for open with filtering. All apps within the given app query scope which can open any of the given file extensions will be included in the response. If appFilterMimeTypes are provided as well, the result is a union of the two resulting app lists.
         */
        appFilterExtensions?: string;
        /**
         * A comma-separated list of MIME types for open with filtering. All apps within the given app query scope which can open any of the given MIME types will be included in the response. If appFilterExtensions are provided as well, the result is a union of the two resulting app lists.
         */
        appFilterMimeTypes?: string;
        /**
         * A language or locale code, as defined by BCP 47, with some extensions from Unicode's LDML format (http://www.unicode.org/reports/tr35/).
         */
        languageCode?: string;
    }
    class Resource$Changes {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.changes.get
         * @desc Deprecated - Use changes.getStartPageToken and changes.list to retrieve recent changes.
         * @alias drive.changes.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.changeId The ID of the change.
         * @param {string=} params.driveId The shared drive from which the change will be returned.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {string=} params.teamDriveId Deprecated use driveId instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Changes$Get, options?: MethodOptions): GaxiosPromise<Schema$Change>;
        get(params: Params$Resource$Changes$Get, options: MethodOptions | BodyResponseCallback<Schema$Change>, callback: BodyResponseCallback<Schema$Change>): void;
        get(params: Params$Resource$Changes$Get, callback: BodyResponseCallback<Schema$Change>): void;
        get(callback: BodyResponseCallback<Schema$Change>): void;
        /**
         * drive.changes.getStartPageToken
         * @desc Gets the starting pageToken for listing future changes.
         * @alias drive.changes.getStartPageToken
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.driveId The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {string=} params.teamDriveId Deprecated use driveId instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getStartPageToken(params?: Params$Resource$Changes$Getstartpagetoken, options?: MethodOptions): GaxiosPromise<Schema$StartPageToken>;
        getStartPageToken(params: Params$Resource$Changes$Getstartpagetoken, options: MethodOptions | BodyResponseCallback<Schema$StartPageToken>, callback: BodyResponseCallback<Schema$StartPageToken>): void;
        getStartPageToken(params: Params$Resource$Changes$Getstartpagetoken, callback: BodyResponseCallback<Schema$StartPageToken>): void;
        getStartPageToken(callback: BodyResponseCallback<Schema$StartPageToken>): void;
        /**
         * drive.changes.list
         * @desc Lists the changes for a user or shared drive.
         * @alias drive.changes.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.driveId The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
         * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
         * @param {boolean=} params.includeDeleted Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
         * @param {boolean=} params.includeItemsFromAllDrives Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
         * @param {boolean=} params.includeSubscribed Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
         * @param {boolean=} params.includeTeamDriveItems Deprecated use includeItemsFromAllDrives instead.
         * @param {integer=} params.maxResults Maximum number of changes to return.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
         * @param {string=} params.spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
         * @param {string=} params.startChangeId Deprecated - use pageToken instead.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {string=} params.teamDriveId Deprecated use driveId instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Changes$List, options?: MethodOptions): GaxiosPromise<Schema$ChangeList>;
        list(params: Params$Resource$Changes$List, options: MethodOptions | BodyResponseCallback<Schema$ChangeList>, callback: BodyResponseCallback<Schema$ChangeList>): void;
        list(params: Params$Resource$Changes$List, callback: BodyResponseCallback<Schema$ChangeList>): void;
        list(callback: BodyResponseCallback<Schema$ChangeList>): void;
        /**
         * drive.changes.watch
         * @desc Subscribe to changes for a user.
         * @alias drive.changes.watch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.driveId The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
         * @param {boolean=} params.includeCorpusRemovals Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
         * @param {boolean=} params.includeDeleted Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
         * @param {boolean=} params.includeItemsFromAllDrives Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
         * @param {boolean=} params.includeSubscribed Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
         * @param {boolean=} params.includeTeamDriveItems Deprecated use includeItemsFromAllDrives instead.
         * @param {integer=} params.maxResults Maximum number of changes to return.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
         * @param {string=} params.spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
         * @param {string=} params.startChangeId Deprecated - use pageToken instead.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {string=} params.teamDriveId Deprecated use driveId instead.
         * @param {().Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        watch(params?: Params$Resource$Changes$Watch, options?: MethodOptions): GaxiosPromise<Schema$Channel>;
        watch(params: Params$Resource$Changes$Watch, options: MethodOptions | BodyResponseCallback<Schema$Channel>, callback: BodyResponseCallback<Schema$Channel>): void;
        watch(params: Params$Resource$Changes$Watch, callback: BodyResponseCallback<Schema$Channel>): void;
        watch(callback: BodyResponseCallback<Schema$Channel>): void;
    }
    interface Params$Resource$Changes$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the change.
         */
        changeId?: string;
        /**
         * The shared drive from which the change will be returned.
         */
        driveId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Deprecated use driveId instead.
         */
        teamDriveId?: string;
    }
    interface Params$Resource$Changes$Getstartpagetoken extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the shared drive for which the starting pageToken for listing future changes from that shared drive will be returned.
         */
        driveId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Deprecated use driveId instead.
         */
        teamDriveId?: string;
    }
    interface Params$Resource$Changes$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
         */
        driveId?: string;
        /**
         * Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
         */
        includeCorpusRemovals?: boolean;
        /**
         * Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
         */
        includeDeleted?: boolean;
        /**
         * Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
         */
        includeItemsFromAllDrives?: boolean;
        /**
         * Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
         */
        includeSubscribed?: boolean;
        /**
         * Deprecated use includeItemsFromAllDrives instead.
         */
        includeTeamDriveItems?: boolean;
        /**
         * Maximum number of changes to return.
         */
        maxResults?: number;
        /**
         * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
         */
        pageToken?: string;
        /**
         * A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
         */
        spaces?: string;
        /**
         * Deprecated - use pageToken instead.
         */
        startChangeId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Deprecated use driveId instead.
         */
        teamDriveId?: string;
    }
    interface Params$Resource$Changes$Watch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The shared drive from which changes will be returned. If specified the change IDs will be reflective of the shared drive; use the combined drive ID and change ID as an identifier.
         */
        driveId?: string;
        /**
         * Whether changes should include the file resource if the file is still accessible by the user at the time of the request, even when a file was removed from the list of changes and there will be no further change entries for this file.
         */
        includeCorpusRemovals?: boolean;
        /**
         * Whether to include changes indicating that items have been removed from the list of changes, for example by deletion or loss of access.
         */
        includeDeleted?: boolean;
        /**
         * Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
         */
        includeItemsFromAllDrives?: boolean;
        /**
         * Whether to include changes outside the My Drive hierarchy in the result. When set to false, changes to files such as those in the Application Data folder or shared files which have not been added to My Drive will be omitted from the result.
         */
        includeSubscribed?: boolean;
        /**
         * Deprecated use includeItemsFromAllDrives instead.
         */
        includeTeamDriveItems?: boolean;
        /**
         * Maximum number of changes to return.
         */
        maxResults?: number;
        /**
         * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response or to the response from the getStartPageToken method.
         */
        pageToken?: string;
        /**
         * A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
         */
        spaces?: string;
        /**
         * Deprecated - use pageToken instead.
         */
        startChangeId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Deprecated use driveId instead.
         */
        teamDriveId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Channel;
    }
    class Resource$Channels {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.channels.stop
         * @desc Stop watching resources through this channel
         * @alias drive.channels.stop
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        stop(params?: Params$Resource$Channels$Stop, options?: MethodOptions): GaxiosPromise<void>;
        stop(params: Params$Resource$Channels$Stop, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        stop(params: Params$Resource$Channels$Stop, callback: BodyResponseCallback<void>): void;
        stop(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Channels$Stop extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Channel;
    }
    class Resource$Children {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.children.delete
         * @desc Removes a child from a folder.
         * @alias drive.children.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.childId The ID of the child.
         * @param {string} params.folderId The ID of the folder.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Children$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Children$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Children$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * drive.children.get
         * @desc Gets a specific child reference.
         * @alias drive.children.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.childId The ID of the child.
         * @param {string} params.folderId The ID of the folder.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Children$Get, options?: MethodOptions): GaxiosPromise<Schema$ChildReference>;
        get(params: Params$Resource$Children$Get, options: MethodOptions | BodyResponseCallback<Schema$ChildReference>, callback: BodyResponseCallback<Schema$ChildReference>): void;
        get(params: Params$Resource$Children$Get, callback: BodyResponseCallback<Schema$ChildReference>): void;
        get(callback: BodyResponseCallback<Schema$ChildReference>): void;
        /**
         * drive.children.insert
         * @desc Inserts a file into a folder.
         * @alias drive.children.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.folderId The ID of the folder.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {().ChildReference} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Children$Insert, options?: MethodOptions): GaxiosPromise<Schema$ChildReference>;
        insert(params: Params$Resource$Children$Insert, options: MethodOptions | BodyResponseCallback<Schema$ChildReference>, callback: BodyResponseCallback<Schema$ChildReference>): void;
        insert(params: Params$Resource$Children$Insert, callback: BodyResponseCallback<Schema$ChildReference>): void;
        insert(callback: BodyResponseCallback<Schema$ChildReference>): void;
        /**
         * drive.children.list
         * @desc Lists a folder's children.
         * @alias drive.children.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.folderId The ID of the folder.
         * @param {integer=} params.maxResults Maximum number of children to return.
         * @param {string=} params.orderBy A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', and 'title'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
         * @param {string=} params.pageToken Page token for children.
         * @param {string=} params.q Query string for searching children.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Children$List, options?: MethodOptions): GaxiosPromise<Schema$ChildList>;
        list(params: Params$Resource$Children$List, options: MethodOptions | BodyResponseCallback<Schema$ChildList>, callback: BodyResponseCallback<Schema$ChildList>): void;
        list(params: Params$Resource$Children$List, callback: BodyResponseCallback<Schema$ChildList>): void;
        list(callback: BodyResponseCallback<Schema$ChildList>): void;
    }
    interface Params$Resource$Children$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the child.
         */
        childId?: string;
        /**
         * The ID of the folder.
         */
        folderId?: string;
    }
    interface Params$Resource$Children$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the child.
         */
        childId?: string;
        /**
         * The ID of the folder.
         */
        folderId?: string;
    }
    interface Params$Resource$Children$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the folder.
         */
        folderId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ChildReference;
    }
    interface Params$Resource$Children$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the folder.
         */
        folderId?: string;
        /**
         * Maximum number of children to return.
         */
        maxResults?: number;
        /**
         * A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', and 'title'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
         */
        orderBy?: string;
        /**
         * Page token for children.
         */
        pageToken?: string;
        /**
         * Query string for searching children.
         */
        q?: string;
    }
    class Resource$Comments {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.comments.delete
         * @desc Deletes a comment.
         * @alias drive.comments.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Comments$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Comments$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Comments$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * drive.comments.get
         * @desc Gets a comment by ID.
         * @alias drive.comments.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Comments$Get, options?: MethodOptions): GaxiosPromise<Schema$Comment>;
        get(params: Params$Resource$Comments$Get, options: MethodOptions | BodyResponseCallback<Schema$Comment>, callback: BodyResponseCallback<Schema$Comment>): void;
        get(params: Params$Resource$Comments$Get, callback: BodyResponseCallback<Schema$Comment>): void;
        get(callback: BodyResponseCallback<Schema$Comment>): void;
        /**
         * drive.comments.insert
         * @desc Creates a new comment on the given file.
         * @alias drive.comments.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {().Comment} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Comments$Insert, options?: MethodOptions): GaxiosPromise<Schema$Comment>;
        insert(params: Params$Resource$Comments$Insert, options: MethodOptions | BodyResponseCallback<Schema$Comment>, callback: BodyResponseCallback<Schema$Comment>): void;
        insert(params: Params$Resource$Comments$Insert, callback: BodyResponseCallback<Schema$Comment>): void;
        insert(callback: BodyResponseCallback<Schema$Comment>): void;
        /**
         * drive.comments.list
         * @desc Lists a file's comments.
         * @alias drive.comments.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
         * @param {integer=} params.maxResults The maximum number of discussions to include in the response, used for paging.
         * @param {string=} params.pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {string=} params.updatedMin Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Comments$List, options?: MethodOptions): GaxiosPromise<Schema$CommentList>;
        list(params: Params$Resource$Comments$List, options: MethodOptions | BodyResponseCallback<Schema$CommentList>, callback: BodyResponseCallback<Schema$CommentList>): void;
        list(params: Params$Resource$Comments$List, callback: BodyResponseCallback<Schema$CommentList>): void;
        list(callback: BodyResponseCallback<Schema$CommentList>): void;
        /**
         * drive.comments.patch
         * @desc Updates an existing comment. This method supports patch semantics.
         * @alias drive.comments.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {().Comment} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Comments$Patch, options?: MethodOptions): GaxiosPromise<Schema$Comment>;
        patch(params: Params$Resource$Comments$Patch, options: MethodOptions | BodyResponseCallback<Schema$Comment>, callback: BodyResponseCallback<Schema$Comment>): void;
        patch(params: Params$Resource$Comments$Patch, callback: BodyResponseCallback<Schema$Comment>): void;
        patch(callback: BodyResponseCallback<Schema$Comment>): void;
        /**
         * drive.comments.update
         * @desc Updates an existing comment.
         * @alias drive.comments.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {().Comment} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Comments$Update, options?: MethodOptions): GaxiosPromise<Schema$Comment>;
        update(params: Params$Resource$Comments$Update, options: MethodOptions | BodyResponseCallback<Schema$Comment>, callback: BodyResponseCallback<Schema$Comment>): void;
        update(params: Params$Resource$Comments$Update, callback: BodyResponseCallback<Schema$Comment>): void;
        update(callback: BodyResponseCallback<Schema$Comment>): void;
    }
    interface Params$Resource$Comments$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the comment.
         */
        commentId?: string;
        /**
         * The ID of the file.
         */
        fileId?: string;
    }
    interface Params$Resource$Comments$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the comment.
         */
        commentId?: string;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * If set, this will succeed when retrieving a deleted comment, and will include any deleted replies.
         */
        includeDeleted?: boolean;
    }
    interface Params$Resource$Comments$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Comment;
    }
    interface Params$Resource$Comments$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * If set, all comments and replies, including deleted comments and replies (with content stripped) will be returned.
         */
        includeDeleted?: boolean;
        /**
         * The maximum number of discussions to include in the response, used for paging.
         */
        maxResults?: number;
        /**
         * The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         */
        pageToken?: string;
        /**
         * Only discussions that were updated after this timestamp will be returned. Formatted as an RFC 3339 timestamp.
         */
        updatedMin?: string;
    }
    interface Params$Resource$Comments$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the comment.
         */
        commentId?: string;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Comment;
    }
    interface Params$Resource$Comments$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the comment.
         */
        commentId?: string;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Comment;
    }
    class Resource$Drives {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.drives.delete
         * @desc Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
         * @alias drive.drives.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.driveId The ID of the shared drive.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Drives$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Drives$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Drives$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * drive.drives.get
         * @desc Gets a shared drive's metadata by ID.
         * @alias drive.drives.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.driveId The ID of the shared drive.
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Drives$Get, options?: MethodOptions): GaxiosPromise<Schema$Drive>;
        get(params: Params$Resource$Drives$Get, options: MethodOptions | BodyResponseCallback<Schema$Drive>, callback: BodyResponseCallback<Schema$Drive>): void;
        get(params: Params$Resource$Drives$Get, callback: BodyResponseCallback<Schema$Drive>): void;
        get(callback: BodyResponseCallback<Schema$Drive>): void;
        /**
         * drive.drives.hide
         * @desc Hides a shared drive from the default view.
         * @alias drive.drives.hide
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.driveId The ID of the shared drive.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        hide(params?: Params$Resource$Drives$Hide, options?: MethodOptions): GaxiosPromise<Schema$Drive>;
        hide(params: Params$Resource$Drives$Hide, options: MethodOptions | BodyResponseCallback<Schema$Drive>, callback: BodyResponseCallback<Schema$Drive>): void;
        hide(params: Params$Resource$Drives$Hide, callback: BodyResponseCallback<Schema$Drive>): void;
        hide(callback: BodyResponseCallback<Schema$Drive>): void;
        /**
         * drive.drives.insert
         * @desc Creates a new shared drive.
         * @alias drive.drives.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.requestId An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
         * @param {().Drive} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Drives$Insert, options?: MethodOptions): GaxiosPromise<Schema$Drive>;
        insert(params: Params$Resource$Drives$Insert, options: MethodOptions | BodyResponseCallback<Schema$Drive>, callback: BodyResponseCallback<Schema$Drive>): void;
        insert(params: Params$Resource$Drives$Insert, callback: BodyResponseCallback<Schema$Drive>): void;
        insert(callback: BodyResponseCallback<Schema$Drive>): void;
        /**
         * drive.drives.list
         * @desc Lists the user's shared drives.
         * @alias drive.drives.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of shared drives to return.
         * @param {string=} params.pageToken Page token for shared drives.
         * @param {string=} params.q Query string for searching shared drives.
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Drives$List, options?: MethodOptions): GaxiosPromise<Schema$DriveList>;
        list(params: Params$Resource$Drives$List, options: MethodOptions | BodyResponseCallback<Schema$DriveList>, callback: BodyResponseCallback<Schema$DriveList>): void;
        list(params: Params$Resource$Drives$List, callback: BodyResponseCallback<Schema$DriveList>): void;
        list(callback: BodyResponseCallback<Schema$DriveList>): void;
        /**
         * drive.drives.unhide
         * @desc Restores a shared drive to the default view.
         * @alias drive.drives.unhide
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.driveId The ID of the shared drive.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        unhide(params?: Params$Resource$Drives$Unhide, options?: MethodOptions): GaxiosPromise<Schema$Drive>;
        unhide(params: Params$Resource$Drives$Unhide, options: MethodOptions | BodyResponseCallback<Schema$Drive>, callback: BodyResponseCallback<Schema$Drive>): void;
        unhide(params: Params$Resource$Drives$Unhide, callback: BodyResponseCallback<Schema$Drive>): void;
        unhide(callback: BodyResponseCallback<Schema$Drive>): void;
        /**
         * drive.drives.update
         * @desc Updates the metadata for a shared drive.
         * @alias drive.drives.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.driveId The ID of the shared drive.
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
         * @param {().Drive} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Drives$Update, options?: MethodOptions): GaxiosPromise<Schema$Drive>;
        update(params: Params$Resource$Drives$Update, options: MethodOptions | BodyResponseCallback<Schema$Drive>, callback: BodyResponseCallback<Schema$Drive>): void;
        update(params: Params$Resource$Drives$Update, callback: BodyResponseCallback<Schema$Drive>): void;
        update(callback: BodyResponseCallback<Schema$Drive>): void;
    }
    interface Params$Resource$Drives$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the shared drive.
         */
        driveId?: string;
    }
    interface Params$Resource$Drives$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the shared drive.
         */
        driveId?: string;
        /**
         * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
         */
        useDomainAdminAccess?: boolean;
    }
    interface Params$Resource$Drives$Hide extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the shared drive.
         */
        driveId?: string;
    }
    interface Params$Resource$Drives$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a shared drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same shared drive. If the shared drive already exists a 409 error will be returned.
         */
        requestId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Drive;
    }
    interface Params$Resource$Drives$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Maximum number of shared drives to return.
         */
        maxResults?: number;
        /**
         * Page token for shared drives.
         */
        pageToken?: string;
        /**
         * Query string for searching shared drives.
         */
        q?: string;
        /**
         * Issue the request as a domain administrator; if set to true, then all shared drives of the domain in which the requester is an administrator are returned.
         */
        useDomainAdminAccess?: boolean;
    }
    interface Params$Resource$Drives$Unhide extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the shared drive.
         */
        driveId?: string;
    }
    interface Params$Resource$Drives$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the shared drive.
         */
        driveId?: string;
        /**
         * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the shared drive belongs.
         */
        useDomainAdminAccess?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Drive;
    }
    class Resource$Files {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.files.copy
         * @desc Creates a copy of the specified file.
         * @alias drive.files.copy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.convert Whether to convert this file to the corresponding Google Docs format.
         * @param {string} params.fileId The ID of the file to copy.
         * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         * @param {boolean=} params.pinned Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {string=} params.timedTextLanguage The language of the timed text.
         * @param {string=} params.timedTextTrackName The timed text track name.
         * @param {string=} params.visibility The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
         * @param {().File} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        copy(params?: Params$Resource$Files$Copy, options?: MethodOptions): GaxiosPromise<Schema$File>;
        copy(params: Params$Resource$Files$Copy, options: MethodOptions | BodyResponseCallback<Schema$File>, callback: BodyResponseCallback<Schema$File>): void;
        copy(params: Params$Resource$Files$Copy, callback: BodyResponseCallback<Schema$File>): void;
        copy(callback: BodyResponseCallback<Schema$File>): void;
        /**
         * drive.files.delete
         * @desc Permanently deletes a file by ID. Skips the trash. The currently authenticated user must own the file or be an organizer on the parent for shared drive files.
         * @alias drive.files.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file to delete.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Files$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Files$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Files$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * drive.files.emptyTrash
         * @desc Permanently deletes all of the user's trashed files.
         * @alias drive.files.emptyTrash
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        emptyTrash(params?: Params$Resource$Files$Emptytrash, options?: MethodOptions): GaxiosPromise<void>;
        emptyTrash(params: Params$Resource$Files$Emptytrash, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        emptyTrash(params: Params$Resource$Files$Emptytrash, callback: BodyResponseCallback<void>): void;
        emptyTrash(callback: BodyResponseCallback<void>): void;
        /**
         * drive.files.export
         * @desc Exports a Google Doc to the requested MIME type and returns the exported content. Please note that the exported content is limited to 10MB.
         * @alias drive.files.export
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.mimeType The MIME type of the format requested for this export.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        export(params?: Params$Resource$Files$Export, options?: MethodOptions): GaxiosPromise<void>;
        export(params: Params$Resource$Files$Export, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        export(params: Params$Resource$Files$Export, callback: BodyResponseCallback<void>): void;
        export(callback: BodyResponseCallback<void>): void;
        /**
         * drive.files.generateIds
         * @desc Generates a set of file IDs which can be provided in insert requests.
         * @alias drive.files.generateIds
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of IDs to return.
         * @param {string=} params.space The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generateIds(params?: Params$Resource$Files$Generateids, options?: MethodOptions): GaxiosPromise<Schema$GeneratedIds>;
        generateIds(params: Params$Resource$Files$Generateids, options: MethodOptions | BodyResponseCallback<Schema$GeneratedIds>, callback: BodyResponseCallback<Schema$GeneratedIds>): void;
        generateIds(params: Params$Resource$Files$Generateids, callback: BodyResponseCallback<Schema$GeneratedIds>): void;
        generateIds(callback: BodyResponseCallback<Schema$GeneratedIds>): void;
        /**
         * drive.files.get
         * @desc Gets a file's metadata by ID.
         * @alias drive.files.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files.
         * @param {string} params.fileId The ID for the file in question.
         * @param {string=} params.projection This parameter is deprecated and has no function.
         * @param {string=} params.revisionId Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {boolean=} params.updateViewedDate Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Files$Get, options?: MethodOptions): GaxiosPromise<Schema$File>;
        get(params: Params$Resource$Files$Get, options: MethodOptions | BodyResponseCallback<Schema$File>, callback: BodyResponseCallback<Schema$File>): void;
        get(params: Params$Resource$Files$Get, callback: BodyResponseCallback<Schema$File>): void;
        get(callback: BodyResponseCallback<Schema$File>): void;
        /**
         * drive.files.insert
         * @desc Insert a new file.
         * @alias drive.files.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.convert Whether to convert this file to the corresponding Google Docs format.
         * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         * @param {boolean=} params.pinned Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {string=} params.timedTextLanguage The language of the timed text.
         * @param {string=} params.timedTextTrackName The timed text track name.
         * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
         * @param {string=} params.visibility The visibility of the new file. This parameter is only relevant when convert=false.
         * @param  {object} params.resource Media resource metadata
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Files$Insert, options?: MethodOptions): GaxiosPromise<Schema$File>;
        insert(params: Params$Resource$Files$Insert, options: MethodOptions | BodyResponseCallback<Schema$File>, callback: BodyResponseCallback<Schema$File>): void;
        insert(params: Params$Resource$Files$Insert, callback: BodyResponseCallback<Schema$File>): void;
        insert(callback: BodyResponseCallback<Schema$File>): void;
        /**
         * drive.files.list
         * @desc Lists the user's files.
         * @alias drive.files.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.corpora Bodies of items (files/documents) to which the query applies. Supported bodies are 'default', 'domain', 'drive' and 'allDrives'. Prefer 'default' or 'drive' to 'allDrives' for efficiency.
         * @param {string=} params.corpus The body of items (files/documents) to which the query applies. Deprecated: use 'corpora' instead.
         * @param {string=} params.driveId ID of the shared drive to search.
         * @param {boolean=} params.includeItemsFromAllDrives Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
         * @param {boolean=} params.includeTeamDriveItems Deprecated use includeItemsFromAllDrives instead.
         * @param {integer=} params.maxResults The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
         * @param {string=} params.orderBy A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', 'title', and 'title_natural'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
         * @param {string=} params.pageToken Page token for files.
         * @param {string=} params.projection This parameter is deprecated and has no function.
         * @param {string=} params.q Query string for searching files.
         * @param {string=} params.spaces A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {string=} params.teamDriveId Deprecated use driveId instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Files$List, options?: MethodOptions): GaxiosPromise<Schema$FileList>;
        list(params: Params$Resource$Files$List, options: MethodOptions | BodyResponseCallback<Schema$FileList>, callback: BodyResponseCallback<Schema$FileList>): void;
        list(params: Params$Resource$Files$List, callback: BodyResponseCallback<Schema$FileList>): void;
        list(callback: BodyResponseCallback<Schema$FileList>): void;
        /**
         * drive.files.patch
         * @desc Updates file metadata and/or content. This method supports patch semantics.
         * @alias drive.files.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.addParents Comma-separated list of parent IDs to add.
         * @param {boolean=} params.convert This parameter is deprecated and has no function.
         * @param {string} params.fileId The ID of the file to update.
         * @param {string=} params.modifiedDateBehavior Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
         * @param {boolean=} params.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
         * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         * @param {boolean=} params.pinned Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
         * @param {string=} params.removeParents Comma-separated list of parent IDs to remove.
         * @param {boolean=} params.setModifiedDate Whether to set the modified date using the value supplied in the request body. Setting this field to true is equivalent to modifiedDateBehavior=fromBodyOrNow, and false is equivalent to modifiedDateBehavior=now. To prevent any changes to the modified date set modifiedDateBehavior=noChange.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {string=} params.timedTextLanguage The language of the timed text.
         * @param {string=} params.timedTextTrackName The timed text track name.
         * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully updating the file.
         * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
         * @param {().File} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Files$Patch, options?: MethodOptions): GaxiosPromise<Schema$File>;
        patch(params: Params$Resource$Files$Patch, options: MethodOptions | BodyResponseCallback<Schema$File>, callback: BodyResponseCallback<Schema$File>): void;
        patch(params: Params$Resource$Files$Patch, callback: BodyResponseCallback<Schema$File>): void;
        patch(callback: BodyResponseCallback<Schema$File>): void;
        /**
         * drive.files.touch
         * @desc Set the file's updated time to the current server time.
         * @alias drive.files.touch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file to update.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        touch(params?: Params$Resource$Files$Touch, options?: MethodOptions): GaxiosPromise<Schema$File>;
        touch(params: Params$Resource$Files$Touch, options: MethodOptions | BodyResponseCallback<Schema$File>, callback: BodyResponseCallback<Schema$File>): void;
        touch(params: Params$Resource$Files$Touch, callback: BodyResponseCallback<Schema$File>): void;
        touch(callback: BodyResponseCallback<Schema$File>): void;
        /**
         * drive.files.trash
         * @desc Moves a file to the trash. The currently authenticated user must own the file or be at least a fileOrganizer on the parent for shared drive files.
         * @alias drive.files.trash
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file to trash.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        trash(params?: Params$Resource$Files$Trash, options?: MethodOptions): GaxiosPromise<Schema$File>;
        trash(params: Params$Resource$Files$Trash, options: MethodOptions | BodyResponseCallback<Schema$File>, callback: BodyResponseCallback<Schema$File>): void;
        trash(params: Params$Resource$Files$Trash, callback: BodyResponseCallback<Schema$File>): void;
        trash(callback: BodyResponseCallback<Schema$File>): void;
        /**
         * drive.files.untrash
         * @desc Restores a file from the trash.
         * @alias drive.files.untrash
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file to untrash.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        untrash(params?: Params$Resource$Files$Untrash, options?: MethodOptions): GaxiosPromise<Schema$File>;
        untrash(params: Params$Resource$Files$Untrash, options: MethodOptions | BodyResponseCallback<Schema$File>, callback: BodyResponseCallback<Schema$File>): void;
        untrash(params: Params$Resource$Files$Untrash, callback: BodyResponseCallback<Schema$File>): void;
        untrash(callback: BodyResponseCallback<Schema$File>): void;
        /**
         * drive.files.update
         * @desc Updates file metadata and/or content.
         * @alias drive.files.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.addParents Comma-separated list of parent IDs to add.
         * @param {boolean=} params.convert This parameter is deprecated and has no function.
         * @param {string} params.fileId The ID of the file to update.
         * @param {string=} params.modifiedDateBehavior Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
         * @param {boolean=} params.newRevision Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
         * @param {boolean=} params.ocr Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         * @param {string=} params.ocrLanguage If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         * @param {boolean=} params.pinned Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
         * @param {string=} params.removeParents Comma-separated list of parent IDs to remove.
         * @param {boolean=} params.setModifiedDate Whether to set the modified date using the value supplied in the request body. Setting this field to true is equivalent to modifiedDateBehavior=fromBodyOrNow, and false is equivalent to modifiedDateBehavior=now. To prevent any changes to the modified date set modifiedDateBehavior=noChange.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {string=} params.timedTextLanguage The language of the timed text.
         * @param {string=} params.timedTextTrackName The timed text track name.
         * @param {boolean=} params.updateViewedDate Whether to update the view date after successfully updating the file.
         * @param {boolean=} params.useContentAsIndexableText Whether to use the content as indexable text.
         * @param  {object} params.resource Media resource metadata
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Files$Update, options?: MethodOptions): GaxiosPromise<Schema$File>;
        update(params: Params$Resource$Files$Update, options: MethodOptions | BodyResponseCallback<Schema$File>, callback: BodyResponseCallback<Schema$File>): void;
        update(params: Params$Resource$Files$Update, callback: BodyResponseCallback<Schema$File>): void;
        update(callback: BodyResponseCallback<Schema$File>): void;
        /**
         * drive.files.watch
         * @desc Subscribe to changes on a file
         * @alias drive.files.watch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.acknowledgeAbuse Whether the user is acknowledging the risk of downloading known malware or other abusive files.
         * @param {string} params.fileId The ID for the file in question.
         * @param {string=} params.projection This parameter is deprecated and has no function.
         * @param {string=} params.revisionId Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {boolean=} params.updateViewedDate Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
         * @param {().Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        watch(params?: Params$Resource$Files$Watch, options?: MethodOptions): GaxiosPromise<Schema$Channel>;
        watch(params: Params$Resource$Files$Watch, options: MethodOptions | BodyResponseCallback<Schema$Channel>, callback: BodyResponseCallback<Schema$Channel>): void;
        watch(params: Params$Resource$Files$Watch, callback: BodyResponseCallback<Schema$Channel>): void;
        watch(callback: BodyResponseCallback<Schema$Channel>): void;
    }
    interface Params$Resource$Files$Copy extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Whether to convert this file to the corresponding Google Docs format.
         */
        convert?: boolean;
        /**
         * The ID of the file to copy.
         */
        fileId?: string;
        /**
         * Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         */
        ocr?: boolean;
        /**
         * If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         */
        ocrLanguage?: string;
        /**
         * Whether to pin the head revision of the new copy. A file can have a maximum of 200 pinned revisions.
         */
        pinned?: boolean;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * The language of the timed text.
         */
        timedTextLanguage?: string;
        /**
         * The timed text track name.
         */
        timedTextTrackName?: string;
        /**
         * The visibility of the new file. This parameter is only relevant when the source is not a native Google Doc and convert=false.
         */
        visibility?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$File;
    }
    interface Params$Resource$Files$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file to delete.
         */
        fileId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
    }
    interface Params$Resource$Files$Emptytrash extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Files$Export extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The MIME type of the format requested for this export.
         */
        mimeType?: string;
    }
    interface Params$Resource$Files$Generateids extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Maximum number of IDs to return.
         */
        maxResults?: number;
        /**
         * The space in which the IDs can be used to create new files. Supported values are 'drive' and 'appDataFolder'.
         */
        space?: string;
    }
    interface Params$Resource$Files$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Whether the user is acknowledging the risk of downloading known malware or other abusive files.
         */
        acknowledgeAbuse?: boolean;
        /**
         * The ID for the file in question.
         */
        fileId?: string;
        /**
         * This parameter is deprecated and has no function.
         */
        projection?: string;
        /**
         * Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
         */
        revisionId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
         */
        updateViewedDate?: boolean;
    }
    interface Params$Resource$Files$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Whether to convert this file to the corresponding Google Docs format.
         */
        convert?: boolean;
        /**
         * Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         */
        ocr?: boolean;
        /**
         * If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         */
        ocrLanguage?: string;
        /**
         * Whether to pin the head revision of the uploaded file. A file can have a maximum of 200 pinned revisions.
         */
        pinned?: boolean;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * The language of the timed text.
         */
        timedTextLanguage?: string;
        /**
         * The timed text track name.
         */
        timedTextTrackName?: string;
        /**
         * Whether to use the content as indexable text.
         */
        useContentAsIndexableText?: boolean;
        /**
         * The visibility of the new file. This parameter is only relevant when convert=false.
         */
        visibility?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$File;
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    interface Params$Resource$Files$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Bodies of items (files/documents) to which the query applies. Supported bodies are 'default', 'domain', 'drive' and 'allDrives'. Prefer 'default' or 'drive' to 'allDrives' for efficiency.
         */
        corpora?: string;
        /**
         * The body of items (files/documents) to which the query applies. Deprecated: use 'corpora' instead.
         */
        corpus?: string;
        /**
         * ID of the shared drive to search.
         */
        driveId?: string;
        /**
         * Deprecated - Whether both My Drive and shared drive items should be included in results. This parameter will only be effective until June 1, 2020. Afterwards shared drive items will be included in the results.
         */
        includeItemsFromAllDrives?: boolean;
        /**
         * Deprecated use includeItemsFromAllDrives instead.
         */
        includeTeamDriveItems?: boolean;
        /**
         * The maximum number of files to return per page. Partial or empty result pages are possible even before the end of the files list has been reached.
         */
        maxResults?: number;
        /**
         * A comma-separated list of sort keys. Valid keys are 'createdDate', 'folder', 'lastViewedByMeDate', 'modifiedByMeDate', 'modifiedDate', 'quotaBytesUsed', 'recency', 'sharedWithMeDate', 'starred', 'title', and 'title_natural'. Each key sorts ascending by default, but may be reversed with the 'desc' modifier. Example usage: ?orderBy=folder,modifiedDate desc,title. Please note that there is a current limitation for users with approximately one million files in which the requested sort order is ignored.
         */
        orderBy?: string;
        /**
         * Page token for files.
         */
        pageToken?: string;
        /**
         * This parameter is deprecated and has no function.
         */
        projection?: string;
        /**
         * Query string for searching files.
         */
        q?: string;
        /**
         * A comma-separated list of spaces to query. Supported values are 'drive', 'appDataFolder' and 'photos'.
         */
        spaces?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Deprecated use driveId instead.
         */
        teamDriveId?: string;
    }
    interface Params$Resource$Files$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Comma-separated list of parent IDs to add.
         */
        addParents?: string;
        /**
         * This parameter is deprecated and has no function.
         */
        convert?: boolean;
        /**
         * The ID of the file to update.
         */
        fileId?: string;
        /**
         * Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
         */
        modifiedDateBehavior?: string;
        /**
         * Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
         */
        newRevision?: boolean;
        /**
         * Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         */
        ocr?: boolean;
        /**
         * If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         */
        ocrLanguage?: string;
        /**
         * Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
         */
        pinned?: boolean;
        /**
         * Comma-separated list of parent IDs to remove.
         */
        removeParents?: string;
        /**
         * Whether to set the modified date using the value supplied in the request body. Setting this field to true is equivalent to modifiedDateBehavior=fromBodyOrNow, and false is equivalent to modifiedDateBehavior=now. To prevent any changes to the modified date set modifiedDateBehavior=noChange.
         */
        setModifiedDate?: boolean;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * The language of the timed text.
         */
        timedTextLanguage?: string;
        /**
         * The timed text track name.
         */
        timedTextTrackName?: string;
        /**
         * Whether to update the view date after successfully updating the file.
         */
        updateViewedDate?: boolean;
        /**
         * Whether to use the content as indexable text.
         */
        useContentAsIndexableText?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$File;
    }
    interface Params$Resource$Files$Touch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file to update.
         */
        fileId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
    }
    interface Params$Resource$Files$Trash extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file to trash.
         */
        fileId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
    }
    interface Params$Resource$Files$Untrash extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file to untrash.
         */
        fileId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
    }
    interface Params$Resource$Files$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Comma-separated list of parent IDs to add.
         */
        addParents?: string;
        /**
         * This parameter is deprecated and has no function.
         */
        convert?: boolean;
        /**
         * The ID of the file to update.
         */
        fileId?: string;
        /**
         * Determines the behavior in which modifiedDate is updated. This overrides setModifiedDate.
         */
        modifiedDateBehavior?: string;
        /**
         * Whether a blob upload should create a new revision. If false, the blob data in the current head revision is replaced. If true or not set, a new blob is created as head revision, and previous unpinned revisions are preserved for a short period of time. Pinned revisions are stored indefinitely, using additional storage quota, up to a maximum of 200 revisions. For details on how revisions are retained, see the Drive Help Center.
         */
        newRevision?: boolean;
        /**
         * Whether to attempt OCR on .jpg, .png, .gif, or .pdf uploads.
         */
        ocr?: boolean;
        /**
         * If ocr is true, hints at the language to use. Valid values are BCP 47 codes.
         */
        ocrLanguage?: string;
        /**
         * Whether to pin the new revision. A file can have a maximum of 200 pinned revisions.
         */
        pinned?: boolean;
        /**
         * Comma-separated list of parent IDs to remove.
         */
        removeParents?: string;
        /**
         * Whether to set the modified date using the value supplied in the request body. Setting this field to true is equivalent to modifiedDateBehavior=fromBodyOrNow, and false is equivalent to modifiedDateBehavior=now. To prevent any changes to the modified date set modifiedDateBehavior=noChange.
         */
        setModifiedDate?: boolean;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * The language of the timed text.
         */
        timedTextLanguage?: string;
        /**
         * The timed text track name.
         */
        timedTextTrackName?: string;
        /**
         * Whether to update the view date after successfully updating the file.
         */
        updateViewedDate?: boolean;
        /**
         * Whether to use the content as indexable text.
         */
        useContentAsIndexableText?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$File;
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    interface Params$Resource$Files$Watch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Whether the user is acknowledging the risk of downloading known malware or other abusive files.
         */
        acknowledgeAbuse?: boolean;
        /**
         * The ID for the file in question.
         */
        fileId?: string;
        /**
         * This parameter is deprecated and has no function.
         */
        projection?: string;
        /**
         * Specifies the Revision ID that should be downloaded. Ignored unless alt=media is specified.
         */
        revisionId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Deprecated: Use files.update with modifiedDateBehavior=noChange, updateViewedDate=true and an empty request body.
         */
        updateViewedDate?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Channel;
    }
    class Resource$Parents {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.parents.delete
         * @desc Removes a parent from a file.
         * @alias drive.parents.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.parentId The ID of the parent.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Parents$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Parents$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Parents$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * drive.parents.get
         * @desc Gets a specific parent reference.
         * @alias drive.parents.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.parentId The ID of the parent.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Parents$Get, options?: MethodOptions): GaxiosPromise<Schema$ParentReference>;
        get(params: Params$Resource$Parents$Get, options: MethodOptions | BodyResponseCallback<Schema$ParentReference>, callback: BodyResponseCallback<Schema$ParentReference>): void;
        get(params: Params$Resource$Parents$Get, callback: BodyResponseCallback<Schema$ParentReference>): void;
        get(callback: BodyResponseCallback<Schema$ParentReference>): void;
        /**
         * drive.parents.insert
         * @desc Adds a parent folder for a file.
         * @alias drive.parents.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {().ParentReference} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Parents$Insert, options?: MethodOptions): GaxiosPromise<Schema$ParentReference>;
        insert(params: Params$Resource$Parents$Insert, options: MethodOptions | BodyResponseCallback<Schema$ParentReference>, callback: BodyResponseCallback<Schema$ParentReference>): void;
        insert(params: Params$Resource$Parents$Insert, callback: BodyResponseCallback<Schema$ParentReference>): void;
        insert(callback: BodyResponseCallback<Schema$ParentReference>): void;
        /**
         * drive.parents.list
         * @desc Lists a file's parents.
         * @alias drive.parents.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Parents$List, options?: MethodOptions): GaxiosPromise<Schema$ParentList>;
        list(params: Params$Resource$Parents$List, options: MethodOptions | BodyResponseCallback<Schema$ParentList>, callback: BodyResponseCallback<Schema$ParentList>): void;
        list(params: Params$Resource$Parents$List, callback: BodyResponseCallback<Schema$ParentList>): void;
        list(callback: BodyResponseCallback<Schema$ParentList>): void;
    }
    interface Params$Resource$Parents$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The ID of the parent.
         */
        parentId?: string;
    }
    interface Params$Resource$Parents$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The ID of the parent.
         */
        parentId?: string;
    }
    interface Params$Resource$Parents$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ParentReference;
    }
    interface Params$Resource$Parents$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
    }
    class Resource$Permissions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.permissions.delete
         * @desc Deletes a permission from a file or shared drive.
         * @alias drive.permissions.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file or shared drive.
         * @param {string} params.permissionId The ID for the permission.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Permissions$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Permissions$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Permissions$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * drive.permissions.get
         * @desc Gets a permission by ID.
         * @alias drive.permissions.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file or shared drive.
         * @param {string} params.permissionId The ID for the permission.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Permissions$Get, options?: MethodOptions): GaxiosPromise<Schema$Permission>;
        get(params: Params$Resource$Permissions$Get, options: MethodOptions | BodyResponseCallback<Schema$Permission>, callback: BodyResponseCallback<Schema$Permission>): void;
        get(params: Params$Resource$Permissions$Get, callback: BodyResponseCallback<Schema$Permission>): void;
        get(callback: BodyResponseCallback<Schema$Permission>): void;
        /**
         * drive.permissions.getIdForEmail
         * @desc Returns the permission ID for an email address.
         * @alias drive.permissions.getIdForEmail
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.email The email address for which to return a permission ID
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIdForEmail(params?: Params$Resource$Permissions$Getidforemail, options?: MethodOptions): GaxiosPromise<Schema$PermissionId>;
        getIdForEmail(params: Params$Resource$Permissions$Getidforemail, options: MethodOptions | BodyResponseCallback<Schema$PermissionId>, callback: BodyResponseCallback<Schema$PermissionId>): void;
        getIdForEmail(params: Params$Resource$Permissions$Getidforemail, callback: BodyResponseCallback<Schema$PermissionId>): void;
        getIdForEmail(callback: BodyResponseCallback<Schema$PermissionId>): void;
        /**
         * drive.permissions.insert
         * @desc Inserts a permission for a file or shared drive.
         * @alias drive.permissions.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.emailMessage A plain text custom message to include in notification emails.
         * @param {string} params.fileId The ID for the file or shared drive.
         * @param {boolean=} params.sendNotificationEmails Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         * @param {().Permission} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Permissions$Insert, options?: MethodOptions): GaxiosPromise<Schema$Permission>;
        insert(params: Params$Resource$Permissions$Insert, options: MethodOptions | BodyResponseCallback<Schema$Permission>, callback: BodyResponseCallback<Schema$Permission>): void;
        insert(params: Params$Resource$Permissions$Insert, callback: BodyResponseCallback<Schema$Permission>): void;
        insert(callback: BodyResponseCallback<Schema$Permission>): void;
        /**
         * drive.permissions.list
         * @desc Lists a file's or shared drive's permissions.
         * @alias drive.permissions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file or shared drive.
         * @param {integer=} params.maxResults The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Permissions$List, options?: MethodOptions): GaxiosPromise<Schema$PermissionList>;
        list(params: Params$Resource$Permissions$List, options: MethodOptions | BodyResponseCallback<Schema$PermissionList>, callback: BodyResponseCallback<Schema$PermissionList>): void;
        list(params: Params$Resource$Permissions$List, callback: BodyResponseCallback<Schema$PermissionList>): void;
        list(callback: BodyResponseCallback<Schema$PermissionList>): void;
        /**
         * drive.permissions.patch
         * @desc Updates a permission using patch semantics.
         * @alias drive.permissions.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file or shared drive.
         * @param {string} params.permissionId The ID for the permission.
         * @param {boolean=} params.removeExpiration Whether to remove the expiration date.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {boolean=} params.transferOwnership Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         * @param {().Permission} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Permissions$Patch, options?: MethodOptions): GaxiosPromise<Schema$Permission>;
        patch(params: Params$Resource$Permissions$Patch, options: MethodOptions | BodyResponseCallback<Schema$Permission>, callback: BodyResponseCallback<Schema$Permission>): void;
        patch(params: Params$Resource$Permissions$Patch, callback: BodyResponseCallback<Schema$Permission>): void;
        patch(callback: BodyResponseCallback<Schema$Permission>): void;
        /**
         * drive.permissions.update
         * @desc Updates a permission.
         * @alias drive.permissions.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file or shared drive.
         * @param {string} params.permissionId The ID for the permission.
         * @param {boolean=} params.removeExpiration Whether to remove the expiration date.
         * @param {boolean=} params.supportsAllDrives Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         * @param {boolean=} params.supportsTeamDrives Deprecated use supportsAllDrives instead.
         * @param {boolean=} params.transferOwnership Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         * @param {().Permission} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Permissions$Update, options?: MethodOptions): GaxiosPromise<Schema$Permission>;
        update(params: Params$Resource$Permissions$Update, options: MethodOptions | BodyResponseCallback<Schema$Permission>, callback: BodyResponseCallback<Schema$Permission>): void;
        update(params: Params$Resource$Permissions$Update, callback: BodyResponseCallback<Schema$Permission>): void;
        update(callback: BodyResponseCallback<Schema$Permission>): void;
    }
    interface Params$Resource$Permissions$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID for the file or shared drive.
         */
        fileId?: string;
        /**
         * The ID for the permission.
         */
        permissionId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         */
        useDomainAdminAccess?: boolean;
    }
    interface Params$Resource$Permissions$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID for the file or shared drive.
         */
        fileId?: string;
        /**
         * The ID for the permission.
         */
        permissionId?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         */
        useDomainAdminAccess?: boolean;
    }
    interface Params$Resource$Permissions$Getidforemail extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The email address for which to return a permission ID
         */
        email?: string;
    }
    interface Params$Resource$Permissions$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * A plain text custom message to include in notification emails.
         */
        emailMessage?: string;
        /**
         * The ID for the file or shared drive.
         */
        fileId?: string;
        /**
         * Whether to send notification emails when sharing to users or groups. This parameter is ignored and an email is sent if the role is owner.
         */
        sendNotificationEmails?: boolean;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         */
        useDomainAdminAccess?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Permission;
    }
    interface Params$Resource$Permissions$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID for the file or shared drive.
         */
        fileId?: string;
        /**
         * The maximum number of permissions to return per page. When not set for files in a shared drive, at most 100 results will be returned. When not set for files that are not in a shared drive, the entire list will be returned.
         */
        maxResults?: number;
        /**
         * The token for continuing a previous list request on the next page. This should be set to the value of 'nextPageToken' from the previous response.
         */
        pageToken?: string;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         */
        useDomainAdminAccess?: boolean;
    }
    interface Params$Resource$Permissions$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID for the file or shared drive.
         */
        fileId?: string;
        /**
         * The ID for the permission.
         */
        permissionId?: string;
        /**
         * Whether to remove the expiration date.
         */
        removeExpiration?: boolean;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
         */
        transferOwnership?: boolean;
        /**
         * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         */
        useDomainAdminAccess?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Permission;
    }
    interface Params$Resource$Permissions$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID for the file or shared drive.
         */
        fileId?: string;
        /**
         * The ID for the permission.
         */
        permissionId?: string;
        /**
         * Whether to remove the expiration date.
         */
        removeExpiration?: boolean;
        /**
         * Deprecated - Whether the requesting application supports both My Drives and shared drives. This parameter will only be effective until June 1, 2020. Afterwards all applications are assumed to support shared drives.
         */
        supportsAllDrives?: boolean;
        /**
         * Deprecated use supportsAllDrives instead.
         */
        supportsTeamDrives?: boolean;
        /**
         * Whether changing a role to 'owner' downgrades the current owners to writers. Does nothing if the specified role is not 'owner'.
         */
        transferOwnership?: boolean;
        /**
         * Issue the request as a domain administrator; if set to true, then the requester will be granted access if the file ID parameter refers to a shared drive and the requester is an administrator of the domain to which the shared drive belongs.
         */
        useDomainAdminAccess?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Permission;
    }
    class Resource$Properties {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.properties.delete
         * @desc Deletes a property.
         * @alias drive.properties.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.propertyKey The key of the property.
         * @param {string=} params.visibility The visibility of the property.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Properties$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Properties$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Properties$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * drive.properties.get
         * @desc Gets a property by its key.
         * @alias drive.properties.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.propertyKey The key of the property.
         * @param {string=} params.visibility The visibility of the property.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Properties$Get, options?: MethodOptions): GaxiosPromise<Schema$Property>;
        get(params: Params$Resource$Properties$Get, options: MethodOptions | BodyResponseCallback<Schema$Property>, callback: BodyResponseCallback<Schema$Property>): void;
        get(params: Params$Resource$Properties$Get, callback: BodyResponseCallback<Schema$Property>): void;
        get(callback: BodyResponseCallback<Schema$Property>): void;
        /**
         * drive.properties.insert
         * @desc Adds a property to a file, or updates it if it already exists.
         * @alias drive.properties.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {().Property} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Properties$Insert, options?: MethodOptions): GaxiosPromise<Schema$Property>;
        insert(params: Params$Resource$Properties$Insert, options: MethodOptions | BodyResponseCallback<Schema$Property>, callback: BodyResponseCallback<Schema$Property>): void;
        insert(params: Params$Resource$Properties$Insert, callback: BodyResponseCallback<Schema$Property>): void;
        insert(callback: BodyResponseCallback<Schema$Property>): void;
        /**
         * drive.properties.list
         * @desc Lists a file's properties.
         * @alias drive.properties.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Properties$List, options?: MethodOptions): GaxiosPromise<Schema$PropertyList>;
        list(params: Params$Resource$Properties$List, options: MethodOptions | BodyResponseCallback<Schema$PropertyList>, callback: BodyResponseCallback<Schema$PropertyList>): void;
        list(params: Params$Resource$Properties$List, callback: BodyResponseCallback<Schema$PropertyList>): void;
        list(callback: BodyResponseCallback<Schema$PropertyList>): void;
        /**
         * drive.properties.patch
         * @desc Updates a property.
         * @alias drive.properties.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.propertyKey The key of the property.
         * @param {string=} params.visibility The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
         * @param {().Property} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Properties$Patch, options?: MethodOptions): GaxiosPromise<Schema$Property>;
        patch(params: Params$Resource$Properties$Patch, options: MethodOptions | BodyResponseCallback<Schema$Property>, callback: BodyResponseCallback<Schema$Property>): void;
        patch(params: Params$Resource$Properties$Patch, callback: BodyResponseCallback<Schema$Property>): void;
        patch(callback: BodyResponseCallback<Schema$Property>): void;
        /**
         * drive.properties.update
         * @desc Updates a property.
         * @alias drive.properties.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.propertyKey The key of the property.
         * @param {string=} params.visibility The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
         * @param {().Property} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Properties$Update, options?: MethodOptions): GaxiosPromise<Schema$Property>;
        update(params: Params$Resource$Properties$Update, options: MethodOptions | BodyResponseCallback<Schema$Property>, callback: BodyResponseCallback<Schema$Property>): void;
        update(params: Params$Resource$Properties$Update, callback: BodyResponseCallback<Schema$Property>): void;
        update(callback: BodyResponseCallback<Schema$Property>): void;
    }
    interface Params$Resource$Properties$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The key of the property.
         */
        propertyKey?: string;
        /**
         * The visibility of the property.
         */
        visibility?: string;
    }
    interface Params$Resource$Properties$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The key of the property.
         */
        propertyKey?: string;
        /**
         * The visibility of the property.
         */
        visibility?: string;
    }
    interface Params$Resource$Properties$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Property;
    }
    interface Params$Resource$Properties$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
    }
    interface Params$Resource$Properties$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The key of the property.
         */
        propertyKey?: string;
        /**
         * The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
         */
        visibility?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Property;
    }
    interface Params$Resource$Properties$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The key of the property.
         */
        propertyKey?: string;
        /**
         * The visibility of the property. Allowed values are PRIVATE and PUBLIC. (Default: PRIVATE)
         */
        visibility?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Property;
    }
    class Resource$Realtime {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.realtime.get
         * @desc Exports the contents of the Realtime API data model associated with this file as JSON.
         * @alias drive.realtime.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file that the Realtime API data model is associated with.
         * @param {integer=} params.revision The revision of the Realtime API data model to export. Revisions start at 1 (the initial empty data model) and are incremented with each change. If this parameter is excluded, the most recent data model will be returned.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Realtime$Get, options?: MethodOptions): GaxiosPromise<void>;
        get(params: Params$Resource$Realtime$Get, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        get(params: Params$Resource$Realtime$Get, callback: BodyResponseCallback<void>): void;
        get(callback: BodyResponseCallback<void>): void;
        /**
         * drive.realtime.update
         * @desc Overwrites the Realtime API data model associated with this file with the provided JSON data model.
         * @alias drive.realtime.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.baseRevision The revision of the model to diff the uploaded model against. If set, the uploaded model is diffed against the provided revision and those differences are merged with any changes made to the model after the provided revision. If not set, the uploaded model replaces the current model on the server.
         * @param {string} params.fileId The ID of the file that the Realtime API data model is associated with.
         * @param {object} params.media Media object
         * @param {string} params.media.mimeType Media mime-type
         * @param {string|object} params.media.body Media body contents
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Realtime$Update, options?: MethodOptions): GaxiosPromise<void>;
        update(params: Params$Resource$Realtime$Update, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        update(params: Params$Resource$Realtime$Update, callback: BodyResponseCallback<void>): void;
        update(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Realtime$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file that the Realtime API data model is associated with.
         */
        fileId?: string;
        /**
         * The revision of the Realtime API data model to export. Revisions start at 1 (the initial empty data model) and are incremented with each change. If this parameter is excluded, the most recent data model will be returned.
         */
        revision?: number;
    }
    interface Params$Resource$Realtime$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The revision of the model to diff the uploaded model against. If set, the uploaded model is diffed against the provided revision and those differences are merged with any changes made to the model after the provided revision. If not set, the uploaded model replaces the current model on the server.
         */
        baseRevision?: string;
        /**
         * The ID of the file that the Realtime API data model is associated with.
         */
        fileId?: string;
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    class Resource$Replies {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.replies.delete
         * @desc Deletes a reply.
         * @alias drive.replies.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.replyId The ID of the reply.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Replies$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Replies$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Replies$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * drive.replies.get
         * @desc Gets a reply.
         * @alias drive.replies.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted If set, this will succeed when retrieving a deleted reply.
         * @param {string} params.replyId The ID of the reply.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Replies$Get, options?: MethodOptions): GaxiosPromise<Schema$CommentReply>;
        get(params: Params$Resource$Replies$Get, options: MethodOptions | BodyResponseCallback<Schema$CommentReply>, callback: BodyResponseCallback<Schema$CommentReply>): void;
        get(params: Params$Resource$Replies$Get, callback: BodyResponseCallback<Schema$CommentReply>): void;
        get(callback: BodyResponseCallback<Schema$CommentReply>): void;
        /**
         * drive.replies.insert
         * @desc Creates a new reply to the given comment.
         * @alias drive.replies.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {().CommentReply} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Replies$Insert, options?: MethodOptions): GaxiosPromise<Schema$CommentReply>;
        insert(params: Params$Resource$Replies$Insert, options: MethodOptions | BodyResponseCallback<Schema$CommentReply>, callback: BodyResponseCallback<Schema$CommentReply>): void;
        insert(params: Params$Resource$Replies$Insert, callback: BodyResponseCallback<Schema$CommentReply>): void;
        insert(callback: BodyResponseCallback<Schema$CommentReply>): void;
        /**
         * drive.replies.list
         * @desc Lists all of the replies to a comment.
         * @alias drive.replies.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {boolean=} params.includeDeleted If set, all replies, including deleted replies (with content stripped) will be returned.
         * @param {integer=} params.maxResults The maximum number of replies to include in the response, used for paging.
         * @param {string=} params.pageToken The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Replies$List, options?: MethodOptions): GaxiosPromise<Schema$CommentReplyList>;
        list(params: Params$Resource$Replies$List, options: MethodOptions | BodyResponseCallback<Schema$CommentReplyList>, callback: BodyResponseCallback<Schema$CommentReplyList>): void;
        list(params: Params$Resource$Replies$List, callback: BodyResponseCallback<Schema$CommentReplyList>): void;
        list(callback: BodyResponseCallback<Schema$CommentReplyList>): void;
        /**
         * drive.replies.patch
         * @desc Updates an existing reply. This method supports patch semantics.
         * @alias drive.replies.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.replyId The ID of the reply.
         * @param {().CommentReply} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Replies$Patch, options?: MethodOptions): GaxiosPromise<Schema$CommentReply>;
        patch(params: Params$Resource$Replies$Patch, options: MethodOptions | BodyResponseCallback<Schema$CommentReply>, callback: BodyResponseCallback<Schema$CommentReply>): void;
        patch(params: Params$Resource$Replies$Patch, callback: BodyResponseCallback<Schema$CommentReply>): void;
        patch(callback: BodyResponseCallback<Schema$CommentReply>): void;
        /**
         * drive.replies.update
         * @desc Updates an existing reply.
         * @alias drive.replies.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.commentId The ID of the comment.
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.replyId The ID of the reply.
         * @param {().CommentReply} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Replies$Update, options?: MethodOptions): GaxiosPromise<Schema$CommentReply>;
        update(params: Params$Resource$Replies$Update, options: MethodOptions | BodyResponseCallback<Schema$CommentReply>, callback: BodyResponseCallback<Schema$CommentReply>): void;
        update(params: Params$Resource$Replies$Update, callback: BodyResponseCallback<Schema$CommentReply>): void;
        update(callback: BodyResponseCallback<Schema$CommentReply>): void;
    }
    interface Params$Resource$Replies$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the comment.
         */
        commentId?: string;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The ID of the reply.
         */
        replyId?: string;
    }
    interface Params$Resource$Replies$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the comment.
         */
        commentId?: string;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * If set, this will succeed when retrieving a deleted reply.
         */
        includeDeleted?: boolean;
        /**
         * The ID of the reply.
         */
        replyId?: string;
    }
    interface Params$Resource$Replies$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the comment.
         */
        commentId?: string;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CommentReply;
    }
    interface Params$Resource$Replies$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the comment.
         */
        commentId?: string;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * If set, all replies, including deleted replies (with content stripped) will be returned.
         */
        includeDeleted?: boolean;
        /**
         * The maximum number of replies to include in the response, used for paging.
         */
        maxResults?: number;
        /**
         * The continuation token, used to page through large result sets. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         */
        pageToken?: string;
    }
    interface Params$Resource$Replies$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the comment.
         */
        commentId?: string;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The ID of the reply.
         */
        replyId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CommentReply;
    }
    interface Params$Resource$Replies$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the comment.
         */
        commentId?: string;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The ID of the reply.
         */
        replyId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CommentReply;
    }
    class Resource$Revisions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.revisions.delete
         * @desc Permanently deletes a file version. You can only delete revisions for files with binary content, like images or videos. Revisions for other files, like Google Docs or Sheets, and the last remaining file version can't be deleted.
         * @alias drive.revisions.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.revisionId The ID of the revision.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Revisions$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Revisions$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Revisions$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * drive.revisions.get
         * @desc Gets a specific revision.
         * @alias drive.revisions.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {string} params.revisionId The ID of the revision.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Revisions$Get, options?: MethodOptions): GaxiosPromise<Schema$Revision>;
        get(params: Params$Resource$Revisions$Get, options: MethodOptions | BodyResponseCallback<Schema$Revision>, callback: BodyResponseCallback<Schema$Revision>): void;
        get(params: Params$Resource$Revisions$Get, callback: BodyResponseCallback<Schema$Revision>): void;
        get(callback: BodyResponseCallback<Schema$Revision>): void;
        /**
         * drive.revisions.list
         * @desc Lists a file's revisions.
         * @alias drive.revisions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID of the file.
         * @param {integer=} params.maxResults Maximum number of revisions to return.
         * @param {string=} params.pageToken Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Revisions$List, options?: MethodOptions): GaxiosPromise<Schema$RevisionList>;
        list(params: Params$Resource$Revisions$List, options: MethodOptions | BodyResponseCallback<Schema$RevisionList>, callback: BodyResponseCallback<Schema$RevisionList>): void;
        list(params: Params$Resource$Revisions$List, callback: BodyResponseCallback<Schema$RevisionList>): void;
        list(callback: BodyResponseCallback<Schema$RevisionList>): void;
        /**
         * drive.revisions.patch
         * @desc Updates a revision. This method supports patch semantics.
         * @alias drive.revisions.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file.
         * @param {string} params.revisionId The ID for the revision.
         * @param {().Revision} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Revisions$Patch, options?: MethodOptions): GaxiosPromise<Schema$Revision>;
        patch(params: Params$Resource$Revisions$Patch, options: MethodOptions | BodyResponseCallback<Schema$Revision>, callback: BodyResponseCallback<Schema$Revision>): void;
        patch(params: Params$Resource$Revisions$Patch, callback: BodyResponseCallback<Schema$Revision>): void;
        patch(callback: BodyResponseCallback<Schema$Revision>): void;
        /**
         * drive.revisions.update
         * @desc Updates a revision.
         * @alias drive.revisions.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.fileId The ID for the file.
         * @param {string} params.revisionId The ID for the revision.
         * @param {().Revision} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Revisions$Update, options?: MethodOptions): GaxiosPromise<Schema$Revision>;
        update(params: Params$Resource$Revisions$Update, options: MethodOptions | BodyResponseCallback<Schema$Revision>, callback: BodyResponseCallback<Schema$Revision>): void;
        update(params: Params$Resource$Revisions$Update, callback: BodyResponseCallback<Schema$Revision>): void;
        update(callback: BodyResponseCallback<Schema$Revision>): void;
    }
    interface Params$Resource$Revisions$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The ID of the revision.
         */
        revisionId?: string;
    }
    interface Params$Resource$Revisions$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * The ID of the revision.
         */
        revisionId?: string;
    }
    interface Params$Resource$Revisions$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the file.
         */
        fileId?: string;
        /**
         * Maximum number of revisions to return.
         */
        maxResults?: number;
        /**
         * Page token for revisions. To get the next page of results, set this parameter to the value of "nextPageToken" from the previous response.
         */
        pageToken?: string;
    }
    interface Params$Resource$Revisions$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID for the file.
         */
        fileId?: string;
        /**
         * The ID for the revision.
         */
        revisionId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Revision;
    }
    interface Params$Resource$Revisions$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID for the file.
         */
        fileId?: string;
        /**
         * The ID for the revision.
         */
        revisionId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Revision;
    }
    class Resource$Teamdrives {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * drive.teamdrives.delete
         * @desc Deprecated use drives.delete instead.
         * @alias drive.teamdrives.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.teamDriveId The ID of the Team Drive
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Teamdrives$Delete, options?: MethodOptions): GaxiosPromise<void>;
        delete(params: Params$Resource$Teamdrives$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Teamdrives$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * drive.teamdrives.get
         * @desc Deprecated use drives.get instead.
         * @alias drive.teamdrives.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.teamDriveId The ID of the Team Drive
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Teamdrives$Get, options?: MethodOptions): GaxiosPromise<Schema$TeamDrive>;
        get(params: Params$Resource$Teamdrives$Get, options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>, callback: BodyResponseCallback<Schema$TeamDrive>): void;
        get(params: Params$Resource$Teamdrives$Get, callback: BodyResponseCallback<Schema$TeamDrive>): void;
        get(callback: BodyResponseCallback<Schema$TeamDrive>): void;
        /**
         * drive.teamdrives.insert
         * @desc Deprecated use drives.insert instead.
         * @alias drive.teamdrives.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.requestId An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
         * @param {().TeamDrive} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Teamdrives$Insert, options?: MethodOptions): GaxiosPromise<Schema$TeamDrive>;
        insert(params: Params$Resource$Teamdrives$Insert, options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>, callback: BodyResponseCallback<Schema$TeamDrive>): void;
        insert(params: Params$Resource$Teamdrives$Insert, callback: BodyResponseCallback<Schema$TeamDrive>): void;
        insert(callback: BodyResponseCallback<Schema$TeamDrive>): void;
        /**
         * drive.teamdrives.list
         * @desc Deprecated use drives.list instead.
         * @alias drive.teamdrives.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults Maximum number of Team Drives to return.
         * @param {string=} params.pageToken Page token for Team Drives.
         * @param {string=} params.q Query string for searching Team Drives.
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Teamdrives$List, options?: MethodOptions): GaxiosPromise<Schema$TeamDriveList>;
        list(params: Params$Resource$Teamdrives$List, options: MethodOptions | BodyResponseCallback<Schema$TeamDriveList>, callback: BodyResponseCallback<Schema$TeamDriveList>): void;
        list(params: Params$Resource$Teamdrives$List, callback: BodyResponseCallback<Schema$TeamDriveList>): void;
        list(callback: BodyResponseCallback<Schema$TeamDriveList>): void;
        /**
         * drive.teamdrives.update
         * @desc Deprecated use drives.update instead.
         * @alias drive.teamdrives.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.teamDriveId The ID of the Team Drive
         * @param {boolean=} params.useDomainAdminAccess Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
         * @param {().TeamDrive} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Teamdrives$Update, options?: MethodOptions): GaxiosPromise<Schema$TeamDrive>;
        update(params: Params$Resource$Teamdrives$Update, options: MethodOptions | BodyResponseCallback<Schema$TeamDrive>, callback: BodyResponseCallback<Schema$TeamDrive>): void;
        update(params: Params$Resource$Teamdrives$Update, callback: BodyResponseCallback<Schema$TeamDrive>): void;
        update(callback: BodyResponseCallback<Schema$TeamDrive>): void;
    }
    interface Params$Resource$Teamdrives$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the Team Drive
         */
        teamDriveId?: string;
    }
    interface Params$Resource$Teamdrives$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the Team Drive
         */
        teamDriveId?: string;
        /**
         * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
         */
        useDomainAdminAccess?: boolean;
    }
    interface Params$Resource$Teamdrives$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * An ID, such as a random UUID, which uniquely identifies this user's request for idempotent creation of a Team Drive. A repeated request by the same user and with the same request ID will avoid creating duplicates by attempting to create the same Team Drive. If the Team Drive already exists a 409 error will be returned.
         */
        requestId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TeamDrive;
    }
    interface Params$Resource$Teamdrives$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Maximum number of Team Drives to return.
         */
        maxResults?: number;
        /**
         * Page token for Team Drives.
         */
        pageToken?: string;
        /**
         * Query string for searching Team Drives.
         */
        q?: string;
        /**
         * Issue the request as a domain administrator; if set to true, then all Team Drives of the domain in which the requester is an administrator are returned.
         */
        useDomainAdminAccess?: boolean;
    }
    interface Params$Resource$Teamdrives$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the Team Drive
         */
        teamDriveId?: string;
        /**
         * Issue the request as a domain administrator; if set to true, then the requester will be granted access if they are an administrator of the domain to which the Team Drive belongs.
         */
        useDomainAdminAccess?: boolean;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TeamDrive;
    }
}
