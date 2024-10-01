export const MultisigPluginAbi = [
  {
    inputs: [
      { internalType: "uint16", name: "limit", type: "uint16" },
      { internalType: "uint256", name: "actual", type: "uint256" },
    ],
    name: "AddresslistLengthOutOfBounds",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint256", name: "proposalId", type: "uint256" },
      { internalType: "address", name: "sender", type: "address" },
    ],
    name: "ApprovalCastForbidden",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "dao", type: "address" },
      { internalType: "address", name: "where", type: "address" },
      { internalType: "address", name: "who", type: "address" },
      { internalType: "bytes32", name: "permissionId", type: "bytes32" },
    ],
    name: "DaoUnauthorized",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint64", name: "limit", type: "uint64" },
      { internalType: "uint64", name: "actual", type: "uint64" },
    ],
    name: "DateOutOfBounds",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "member", type: "address" }],
    name: "InvalidAddresslistUpdate",
    type: "error",
  },
  {
    inputs: [
      { internalType: "uint16", name: "limit", type: "uint16" },
      { internalType: "uint16", name: "actual", type: "uint16" },
    ],
    name: "MinApprovalsOutOfBounds",
    type: "error",
  },
  {
    inputs: [{ internalType: "address", name: "sender", type: "address" }],
    name: "ProposalCreationForbidden",
    type: "error",
  },
  {
    inputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
    name: "ProposalExecutionForbidden",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "address", name: "previousAdmin", type: "address" },
      { indexed: false, internalType: "address", name: "newAdmin", type: "address" },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "proposalId", type: "uint256" },
      { indexed: true, internalType: "address", name: "approver", type: "address" },
    ],
    name: "Approved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "beacon", type: "address" }],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint8", name: "version", type: "uint8" }],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address[]", name: "members", type: "address[]" }],
    name: "MembersAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address[]", name: "members", type: "address[]" }],
    name: "MembersRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "definingContract", type: "address" }],
    name: "MembershipContractAnnounced",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bool", name: "onlyListed", type: "bool" },
      { indexed: true, internalType: "uint16", name: "minApprovals", type: "uint16" },
    ],
    name: "MultisigSettingsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "proposalId", type: "uint256" },
      { indexed: true, internalType: "address", name: "creator", type: "address" },
      { indexed: false, internalType: "uint64", name: "startDate", type: "uint64" },
      { indexed: false, internalType: "uint64", name: "endDate", type: "uint64" },
      { indexed: false, internalType: "bytes", name: "metadata", type: "bytes" },
      {
        components: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "value", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        indexed: false,
        internalType: "struct IDAO.Action[]",
        name: "actions",
        type: "tuple[]",
      },
      { indexed: false, internalType: "uint256", name: "allowFailureMap", type: "uint256" },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "uint256", name: "proposalId", type: "uint256" }],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: true, internalType: "address", name: "implementation", type: "address" }],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "UPDATE_MULTISIG_SETTINGS_PERMISSION_ID",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADE_PLUGIN_PERMISSION_ID",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address[]", name: "_members", type: "address[]" }],
    name: "addAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "addresslistLength",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_blockNumber", type: "uint256" }],
    name: "addresslistLengthAtBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_proposalId", type: "uint256" },
      { internalType: "bool", name: "_tryExecution", type: "bool" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_proposalId", type: "uint256" },
      { internalType: "address", name: "_account", type: "address" },
    ],
    name: "canApprove",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_proposalId", type: "uint256" }],
    name: "canExecute",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes", name: "_metadataURI", type: "bytes" },
      {
        components: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "value", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct IDAO.Action[]",
        name: "_actions",
        type: "tuple[]",
      },
      { internalType: "uint256", name: "_allowFailureMap", type: "uint256" },
      { internalType: "bool", name: "_approveProposal", type: "bool" },
      { internalType: "bool", name: "_tryExecution", type: "bool" },
      { internalType: "uint64", name: "_startDate", type: "uint64" },
      { internalType: "uint64", name: "_endDate", type: "uint64" },
    ],
    name: "createProposal",
    outputs: [{ internalType: "uint256", name: "proposalId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dao",
    outputs: [{ internalType: "contract IDAO", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_proposalId", type: "uint256" }],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_proposalId", type: "uint256" }],
    name: "getProposal",
    outputs: [
      { internalType: "bool", name: "executed", type: "bool" },
      { internalType: "uint16", name: "approvals", type: "uint16" },
      {
        components: [
          { internalType: "uint16", name: "minApprovals", type: "uint16" },
          { internalType: "uint64", name: "snapshotBlock", type: "uint64" },
          { internalType: "uint64", name: "startDate", type: "uint64" },
          { internalType: "uint64", name: "endDate", type: "uint64" },
        ],
        internalType: "struct Multisig.ProposalParameters",
        name: "parameters",
        type: "tuple",
      },
      {
        components: [
          { internalType: "address", name: "to", type: "address" },
          { internalType: "uint256", name: "value", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct IDAO.Action[]",
        name: "actions",
        type: "tuple[]",
      },
      { internalType: "uint256", name: "allowFailureMap", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_proposalId", type: "uint256" },
      { internalType: "address", name: "_account", type: "address" },
    ],
    name: "hasApproved",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IDAO", name: "_dao", type: "address" },
      { internalType: "address[]", name: "_members", type: "address[]" },
      {
        components: [
          { internalType: "bool", name: "onlyListed", type: "bool" },
          { internalType: "uint16", name: "minApprovals", type: "uint16" },
        ],
        internalType: "struct Multisig.MultisigSettings",
        name: "_multisigSettings",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_account", type: "address" }],
    name: "isListed",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_account", type: "address" },
      { internalType: "uint256", name: "_blockNumber", type: "uint256" },
    ],
    name: "isListedAtBlock",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_account", type: "address" }],
    name: "isMember",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastMultisigSettingsChange",
    outputs: [{ internalType: "uint64", name: "", type: "uint64" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "multisigSettings",
    outputs: [
      { internalType: "bool", name: "onlyListed", type: "bool" },
      { internalType: "uint16", name: "minApprovals", type: "uint16" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pluginType",
    outputs: [{ internalType: "enum IPlugin.PluginType", name: "", type: "uint8" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address[]", name: "_members", type: "address[]" }],
    name: "removeAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "_interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "bool", name: "onlyListed", type: "bool" },
          { internalType: "uint16", name: "minApprovals", type: "uint16" },
        ],
        internalType: "struct Multisig.MultisigSettings",
        name: "_multisigSettings",
        type: "tuple",
      },
    ],
    name: "updateMultisigSettings",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newImplementation", type: "address" }],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "newImplementation", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;
